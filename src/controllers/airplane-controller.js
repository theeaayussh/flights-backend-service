const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { Logger } = require("../config");

const createAirplane = async (req, res) => {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    console.log("airpalane response", airplane)
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane Created Successfully",
      data: airplane,
      error: {},
    });
  } catch (error) {
    Logger.error("Something went wrong while creating the airplane", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong while creating the airplave",
      data: {},
      error: error,
    });
  }
};

module.exports = {
  createAirplane,
};
