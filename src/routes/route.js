const express = require("express");
const router = express.Router();
const { PostFunction, getFunction } = require("../controller/controller.js");
router.post("/", PostFunction);
router.get("/", getFunction);

module.exports = router;
