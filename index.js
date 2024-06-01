const server = require('./src/http/server')

async function startApplication() {

    const app = server('app')

    function handleShutdown(signal) {
        console.log(`Recieved ${signal} from application`)
        app.stopServer()
            .then((res) => {
                console.log('Server stooped !!!')
            })
    }

    process.on('SIGINT', handleShutdown)
    process.on('SIGTERM', handleShutdown)

    try {
        await app.startServer();
        console.log('Server started successfully');
    } catch (error) {
        console.log(`Error occurred while starting server: ${error}`);
    }
}

startApplication()