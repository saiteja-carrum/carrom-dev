const express = require("express")
const router = express.Router()

const logger = require("../../../logger/logger")
const healthCheckService = require("../service/healthCheckService")
const authorize = require('../../../../middlewares/authorization/auth');

module.exports = () => {

    router.get('/getStatus', async (req, res, next) => {
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

    router.post('/',authorize, async (req, res, next) => {
        try {
            const record = await healthCheckService.createHealthCheckRecord(req.body);
            res.json(record)
        } catch (error) {
            logger.error('Failed to retrieve data:', error);
            next(error);
        }
    })

    router.put('/:id',authorize, async (req, res, next) => {
        try {
            var id = req.params['id'] 
            var data = req.body;
            data.id = id;
            const record = await healthCheckService.updateHealthCheckRecord(data);
            res.json(record)
        } catch (error) {
            logger.error('Failed to retrieve data:', error);
            next(error);
        }
    })

    router.get('/getStatusFromDB/:id',authorize, async (req, res, next) => {
        try {
            const record = await healthCheckService.getHealthCheckRecordById(req.params['id']);
            res.json(record)
        } catch (error) {
            logger.error('Failed to retrieve data:', error);
            next(error);
        }
    })

    router.get('/getAllStatusFromDB',authorize, async (req, res, next) => {
        try {
            const records = await healthCheckService.getAllHealthCheckRecords();
            res.json(records)
        } catch (error) {
            logger.error('Failed to retrieve data:', error);
            next(error);
        }
    })

    return router
}

