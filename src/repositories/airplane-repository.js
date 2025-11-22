const { CrudRepository } = require("./index");
const { airplanes } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(airplanes);
  }
}

module.exports = {
  AirplaneRepository,
};
