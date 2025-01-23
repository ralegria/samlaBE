const State = require("../models/states.model");

const getStates = async (_, res) => {
  try {
    const states = await State.find({});
    const statesWithoutCities = states.map((state) => {
      return {
        _id: state._id,
        name: state.name,
      };
    });
    res.status(200).json(statesWithoutCities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCities = async (req, res) => {
  const { stateID } = req.params;

  try {
    const state = await State.findById(stateID);
    res.status(200).json(state.cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStates,
  getCities,
};
