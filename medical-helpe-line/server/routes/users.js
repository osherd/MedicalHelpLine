var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  const { user, pass } = req.body;
  res.send(true);
});

router.post("/login", (req, res) => {
  const { userName, password } = req.body;

  console.log("req.body", req.body);

  if (userName === "abc" && password === "123") {
    return res.send(JSON.parse({ message: "ok" }));
  }

  res.sendStatus(403);
});
router.put("/:id", (req, res) => {
  users[req.params.id] = req.data;
});
router.delete("/:id", (req, res) => {
  users = users.filter((x) => x != req.body);
});

module.exports = router;
