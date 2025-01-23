const express = require("express");
const router = express.Router();

const { getStates, getCities } = require("../controllers/states.controller");

router.get("/", getStates);
router.get("/:stateID/cities", getCities);

module.exports = router;
