const express = require("express");
const router = express.Router();    // expressでルーティングを行う

router.get("/", (req, res) => {
  res.send("I am a user");
});

router.get("/info", (req, res) => {
  res.send("This is user info");
});

router.get("/:id", (req, res) => {
  res.send("You requested user " + `${req.params.id}`);
});

module.exports = router;
