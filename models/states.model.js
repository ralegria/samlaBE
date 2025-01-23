const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cities: {
    type: Array,
    required: true,
    default: [],
  },
});

const State = mongoose.model("State", StateSchema);

module.exports = State;
