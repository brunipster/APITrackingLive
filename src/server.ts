import App from './app'
import 'module-alias/register';

import * as dotenv from 'dotenv';
dotenv.config()

import '@utils/DBconnection';

import loggerMiddleware from './middleware/logger'
import * as bodyParser from 'body-parser'

import MovementController from './controllers/movement.controller'
import VehicleLogController from './controllers/vehiclelog.controller'
import VehicleMaintenanceController from './controllers/vehiclemaintenance.controller'

const app = new App({
    port: 5000,
    controllers: [
        new MovementController(),
        new VehicleLogController(),
        new VehicleMaintenanceController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()