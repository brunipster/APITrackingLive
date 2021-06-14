import * as express from 'express'
import { Request, Response } from 'express'
import { typedModel } from 'ts-mongoose'
import VehicleMaintenanceSchema from '@schemas/vehiclemaintenance.schema';
import iController from '@interfaces/controller.interface';

class VehicleMaintenanceController implements iController {
    readonly path = '/vehicle/maintenance';
    public router = express.Router();
    protected VehicleMaintenance = typedModel('VehicleMaintenance', VehicleMaintenanceSchema);

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
            const { description, type, price, kilometer,tags, shop, brand } = req.body;
            await new this.VehicleMaintenance({description, type, price, kilometer,tags, shop, brand}).save((err, result)=>{
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
            const { description, type, price, kilometer,tags, shop, brand } = req.body;
            const { id } = req.params;
            const result = await this.VehicleMaintenance.updateOne({_id: id}, {description, type, price, kilometer,tags, shop, brand});
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
            if(req.body.description) filter.description = req.body.description as String || null;
            if(req.body.tags) filter.tags =  {$in:req.body.tags as Array<string>};
            if(req.body.type) filter.type =  req.body.type as string || null;
            if(filter) return res.status(401).json({message:'Malformed body'});
            const result = await this.VehicleMaintenance.find(filter).exec();
            if(!result || result.length === 0) res.status(404).json({message:'not found'});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).send(`[ERROR]:${error}`)
        }
    }

    protected retriveById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await this.VehicleMaintenance.findById(id).exec()
        res.status(200).json(result);
    }
}

export default VehicleMaintenanceController