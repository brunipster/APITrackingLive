import { RequestHandler, Router } from "express";
import iService from "./service.interface";

interface iController {
    router: any;
    path: String;
    initRoutes(): Router;
    create: RequestHandler;
    delete: RequestHandler;
    getAll: RequestHandler;
    update: RequestHandler;
}
export default iController