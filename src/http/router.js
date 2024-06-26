const { Router } = require("express");
const { urlencoded, json } = require('body-parser');
const bodyParserErrorHandler = require("express-body-parser-error-handler");

const healthCheckRoute = require('../app/modules/health_check/controller/healthCheck_controller');
module.exports = () => {
    const apiRouter = Router();
    apiRouter
        .use(urlencoded({
            limit: '2mb',
            extended: true,
            parameterLimit: 20000
        }))
        .use(json({ limit: '2mb' }))
        .use(bodyParserErrorHandler());

    // Register routes here
    apiRouter.use("/healthCheck", healthCheckRoute());

    const router = Router();
    router.use(`/api/v1`, apiRouter);

    return router;
};
