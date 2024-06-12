const roleRepository = require("../repository/roleRepository");

const createRoleRecord = async (data) => {
    return await roleRepository.createRoleRecord(data);
}

const updateRoleRecord = async (data) => {
    return await roleRepository.updateRoleRecordById(data);
}

const getRoleRecordById = async (id) => {
    const result = await roleRepository.getRoleById(id);
    return result;
}

const getAllRoleRecords = async () => {
    const result = await roleRepository.getAllRoleRecords();
    return result;
}

module.exports = {
    createRoleRecord,
    updateRoleRecord,
    getRoleRecordById,
    getAllRoleRecords
}