var express = require("express");
var router = express.Router();

users = [{ id: "john snow" }];
/* GET users listing. */
router.get("/", function (req, res) {
  const { user, pass } = req.body;
  res.send(true);
});
router.post("/", function (req, res) {
  const { user, pass } = req.body;
  if (user == "roey") {
    if (pass == 123) {
      res.send(true);
    }
  } else {
    res.send(false);
  }
});
router.put("/:id", function (req, res) {
  users[req.params.id] = req.data;
});
router.delete("/:id", function (req, res) {
  users = users.filter((x) => x != req.body);
});

module.exports = router;
