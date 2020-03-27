const csv = require('csv-parser');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

if (process.argv.length !== 4) {
    console.log(`Usage:

node import-csv-to-mongo.js [file-path] [collection-name]
    `);
    process.exit(1);
}

const dataFile = process.argv[2];
const collectionName = process.argv[3];

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

(async () => {
    const client = new MongoClient(MONGODB_URI, {
        useNewUrlParser: true,
    });

    try {
        await client.connect();
        const db = client.db('bookings');
        const collection = db.collection(collectionName);

        const start = Date.now();
        fs.createReadStream(dataFile)
            .pipe(csv())
            .on('data', async (data) => {

                if (data.id) {
                    data._id = data.id;
                    delete data.id;
                }

                await collection.insertOne(data);
            })
            .on('end', () => {
                console.log(`done. took ${Date.now() - start} ms` );
                client.close();
            });
    } catch (err) {
        console.log(err);
    } 
})();
