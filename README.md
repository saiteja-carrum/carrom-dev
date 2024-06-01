# carrum-main-be
This repository is the main BE for carrum.

# Tech
Winston (https://github.com/winstonjs/winston) -> A multi-transport async logging library for node.js.

Express-winston (https://github.com/bithavoc/express-winston) -> provides middlewares for request and error logging in express.js application

dotenv  (https://www.npmjs.com/package/dotenv)  -> used for loading environment variables

sequelize (https://sequelize.org/) -> promise based ORM tool for Node.js. It supports the dialects PostgresSQL, MySQL, SQLite and features soled transaction support, relations, read replication and more.

# Developer guide
1. Define all new middlewares within the middleware folder inside /src folder.
2. Create new modules inside /src/app/modules folder and define the routing path in router.js Refer: "/healthCheck"
3. Each modules will have its own controller, service, repository, constants and models folder. 
NOTE: Keep same naming convention specifically for model (dbmodel). As its getting used to sync database tables with models.
4. Keep all the constants common to all modules inside /src/app/constants, so that they are available within all the application
5. Use common logger for logging purpose, defined inside /src/app/logger.
6. If any new env variables needs to be added, pls update the .env-sample for refrence.
7. Add newly create models to the list in db_exposed_models.js file for syncing purpose for now. 