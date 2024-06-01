const healthCheckRepository = require("../repository/healthCheckRepository");

const createHealthCheckRecord = async (data) => {
    return await healthCheckRepository.createHealthCheckRecord(data);
}

const updateHealthCheckRecord = async (data) => {
    return await healthCheckRepository.updateHealthCheckRecordById(data);
}

const getHealthCheckRecordById = async (id) => {
    const result = await healthCheckRepository.getHealthCheckById(id);
    return result;
}

const getAllHealthCheckRecords = async () => {
    const result = await healthCheckRepository.getAllHealthCheckRecords();
    return result;
}

module.exports = {
    createHealthCheckRecord,
    updateHealthCheckRecord,
    getHealthCheckRecordById,
    getAllHealthCheckRecords

}