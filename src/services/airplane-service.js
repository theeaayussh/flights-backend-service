const { Logger } = require("../config");
const { AirplaneRepository } = require("../repositories/airplane-repository");

const airplaneRepository = new AirplaneRepository();

const createAirplane = async (data) => {
  try {
    console.log("coming here", data)
    const response = await airplaneRepository.create(data);
    console.log("respose from service", response)
    return response;
  } catch (error) {
    Logger.error("Something went wronf createAirplane");
  }
};

module.exports = {
  createAirplane,
};
