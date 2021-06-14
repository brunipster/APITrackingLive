import * as express from 'express'
import { Request, Response } from 'express'
import { typedModel } from 'ts-mongoose'
import MovementSchema from '@schemas/movement.schema';
import iController from '@interfaces/controller.interface';

class MovementController implements iController {
    readonly path = '/movement';
    public router = express.Router();
    protected Movement = typedModel('Movement', MovementSchema);

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
            const { description, type, mount, tags } = req.body;
            await new this.Movement({description, type, mount, tags}).save((err, result)=>{
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
            const { description, type, mount, tags } = req.body;
            const { id } = req.params;
            console.log('ID', id);
            const result = await this.Movement.updateOne({_id: id}, {description, type, mount, tags});
            res.status(200).json(result);
        } catch (error) {
            console.log(error)
            res.status(500).send(`[ERROR]:${error}`)
        }
    }

    protected retrive = async (req: Request, res: Response) => {
        try {
            let filter: any = {};
            if(req.body.type) filter.type = req.body.type as string || null;
            if(req.body.tags) filter.tags =  {$in:req.body.tags as Array<string>};
            if(filter) return res.status(401).json({message:'Malformed body'});
            const result = await this.Movement.find(filter).exec();
            if(!result || result.length === 0) res.status(404).json({message:'not found'});
            res.status(200).json(result);
        } catch (error) {
            
        }
    }

    protected retriveById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await this.Movement.findById(id).exec()
        res.status(200).json(result);
    }
}

export default MovementController