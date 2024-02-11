const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    return res
      .clearCookie("jwt")
      .status(200)
      .json({ message: "Successfully logged out" });
  });

module.exports = router;