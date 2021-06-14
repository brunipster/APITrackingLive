import * as express from 'express'
import { Application } from 'express'
import iController from '@interfaces/controller.interface';

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: Array<iController> ; }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
        this.assets()
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: iController) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use(`/api${controller.path}`, controller.router)
        })
    }

    private assets() {
        this.app.use(express.static('public'))
        this.app.use(express.static('views'))
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App