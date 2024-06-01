const winston = require('winston')
const expressWinston = require('express-winston')

module.exports = () => {

  const logger = expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.json(),
    ),
    msg: 'HTTP Requests {{req.method}} {{req.path}}',
    requestWhitelist: ['params', 'method', 'path', 'query'],
    responseWhitelist: ['statusCode', 'responseTime'],
  });

  const errorLogger = expressWinston.errorLogger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  });

  return {
    logger,
    errorLogger
  };
}
