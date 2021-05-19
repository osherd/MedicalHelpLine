import { Request, Response, Router } from "express";
const userRouter = Router();
userRouter.get("/", (req: Request, res: Response) => {
    res.send("wellcome to user")
})
userRouter.post("/", (req: Request, res: Response) => {
    res.send('wellcome')
})
userRouter.post("/api/login", (req: Request, res: Response) => {
    debugger
    const { user, passwored } = req.body;
    console.log(req.body)
    if (user === 'abc' && passwored === 123)
        res.send('ok')
})

userRouter.put("/api/:id", (req, res) => {
    const id = req.params.id

    if (id === '123') {
        res.send('nice')
    }
});
userRouter.delete("/api/:id", (req, res) => {
    const Users = [{ "id": 1, "name": "user" },
    { "id": 2, "name": "user1" }];
    const user = Users.filter((x) => x != req.body);
});


export default userRouter;