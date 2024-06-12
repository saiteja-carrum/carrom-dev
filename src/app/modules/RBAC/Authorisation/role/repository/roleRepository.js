const { readerDatabase, writerDatabase } = require("../../../../../../infra/database/database");
const logger = require("../../../../../logger/logger");

const createRoleRecord = async (data) => {
    try {
        const model = await writerDatabase('Role')
        const RoleRecord = await model.create(data);
        return RoleRecord;
    } catch (error) {
        logger.error('Error creating Role record:', error);
        throw error;
    }
}

const updateRoleRecordById = async (data) => {
    try {
        const model = await writerDatabase('Role')
        const RoleRecord = await model.update(
            {
                currentVersion: data.currentVersion
            },
            {
                where: {
                    id: data.id
                }
            });
        return RoleRecord;
    } catch (error) {
        logger.error('Error creating Role record:', error);
        throw error;
    }
}

const getRoleById = async (id) => {
    try {
        const model = await readerDatabase('Role')
        const RoleRecord = await model.findByPk(id);
        return RoleRecord;
    } catch (error) {
        logger.error('Error fetching Role record:', error);
        throw error;
    }
}

const getAllRoleRecords = async () => {
    try {
        const model = await readerDatabase('Role')
        const RoleRecords = await model.findAll();
        return RoleRecords;
    } catch (error) {
        logger.error('Error fetching all Role records:', error);
        throw error;
    }
}

module.exports = {
    createRoleRecord,
    updateRoleRecordById,
    getRoleById,
    getAllRoleRecords,
}