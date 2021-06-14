import * as express from 'express'
import { Request, Response } from 'express'
import { typedModel } from 'ts-mongoose'
import VehicleLogSchema from '@schemas/vehiclelog.schema';
import iController from '@interfaces/controller.interface';
import { Date } from 'mongoose';

class VehicleLogController implements iController {
    readonly path = '/vehicle/log';
    public router = express.Router();
    protected VehicleLog = typedModel('VehicleLog', VehicleLogSchema);

    constructor() {
        this.initRoutes()
    }

    initRoutes() {
        this.router.post(`/`, this.create);
        this.router.patch(`/:id`, this.update);
        this.router.post(`/search`, this.retrive);
        this.router.get(`/:id`, this.retriveById);
    }

    protected create = async (req: Request, res: Response) => {
        try {
            const { kilometer, description, tags } = req.body;
            await new this.VehicleLog({kilometer, description, tags}).save((err, result)=>{
                if(err) {res.status(500).send(`[ERROR]:${err}`)};
                res.status(200).json(result);
            })
        } catch (error) {
            console.log(error)
            res.status(500).send(`[ERROR]:${error}`)
        }
    }

    protected update = async (req: Request, res: Response) => {
        try {
            const { kilometer, description, tags } = req.body;
            const { id } = req.params;
            const result = await this.VehicleLog.updateOne({_id: id}, {kilometer, description, tags});
            res.status(200).json(result);
        } catch (error) {
            console.log(error)
            res.status(500).send(`[ERROR]:${error}`)
        }
    }

    protected retrive = async (req: Request, res: Response) => {
        try {
            let filter: any = {};
            if(req.body.date) filter.type = req.body.date as Date || null;
            if(req.body.tags) filter.tags =  {$in:req.body.tags as Array<string>};
            if(filter) return res.status(401).json({message:'Malformed body'});
            const result = await this.VehicleLog.find(filter).exec();
            if(!result || result.length === 0) res.status(404).json({message:'not found'});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).send(`[ERROR]:${error}`)
        }
    }

    protected retriveById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await this.VehicleLog.findById(id).exec()
        res.status(200).json(result);
    }
}

export default VehicleLogController