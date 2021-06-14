import { Request, Response } from 'express'
import * as colors from 'colors';
const loggerMiddleware = (req: Request, resp: Response, next) => {

    console.log(colors.green('Request logged:'), req.method, req.path)
    next()
}

export default loggerMiddleware