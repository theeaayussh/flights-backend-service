const {Logger } = require("../config")

class CrudRespository{
  constructor(model) {
    this.model = model
  }

  async create(data) {
    try {
      const response = await this.model.create(data)
      return response;
    } catch (error) {
      Logger.error("Error in crud respository - create")
      throw error
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data
        }
      })
      return response
    } catch (error) {
      Logger.error("Error in crud respository - destroy")
      throw error
    }
  }

  async get(data) {
    try {
      const response =  await this.model.findByPk(data)
      return response;
    } catch (error) {
      Logger.error("Error in crud respostiroy - get")
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Error in crud repository - getAll")
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id
        }
      })
      return response;
    } catch (error) {
      Logger.error("Error in crud repository - update")
      throw error;
    }
  }
}

module.exports = CrudRespository
