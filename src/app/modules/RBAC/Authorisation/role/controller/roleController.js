const express = require("express")
const router = express.Router()

const logger = require("../../../../../logger/logger")
const roleService = require("../service/roleService")

module.exports = () => {

    router.get('/role', async (req, res, next) => {
        try {
            res.json(
                {
                    "status": "ok"
                }
            )
        } catch (e) {
            logger.error('Failed to retrieve data:', error);
            next(e);
        }
    })

    router.post('/', async (req, res, next) => {
        try {
            const record = await roleService.createRoleRecord(req.body);
            res.json(record)
        } catch (error) {
            logger.error('Failed to retrieve data:', error);
            next(error);
        }
    })

    router.put('/role/:id', async (req, res, next) => {
        try {
            var id = req.params['id'] 
            var data = req.body;
            data.id = id;
            const record = await roleService.updateRoleRecord(data);
            res.json(record)
        } catch (error) {
            logger.error('Failed to retrieve data:', error);
            next(error);
        }
    })

    router.get('/role/:id', async (req, res, next) => {
        try {
            const record = await roleService.getRoleRecordById(req.params['id']);
            res.json(record)
        } catch (error) {
            logger.error('Failed to retrieve data:', error);
            next(error);
        }
    })

    router.get('/roles', async (req, res, next) => {
        try {
            const records = await roleService.getAllRoleRecords();
            res.json(records)
        } catch (error) {
            logger.error('Failed to retrieve data:', error);
            next(error);
        }
    })

    return router
}

