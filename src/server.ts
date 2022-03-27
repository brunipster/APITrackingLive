import App from './app'
import 'module-alias/register';

import * as dotenv from 'dotenv';
dotenv.config()

import '@utils/DBconnection';

import loggerMiddleware from './middleware/logger'
import * as bodyParser from 'body-parser'

import AccountInstance from './controllers/account.controller'
import UserInstance from './controllers/user.controller'
import MovementInstance from './controllers/movement.controller'

const app = new App({
    port: 5000,
    controllers: [
        AccountInstance,
        UserInstance,
        MovementInstance
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()