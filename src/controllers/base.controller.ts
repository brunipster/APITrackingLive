import * as express from 'express'
import iController from '@interfaces/controller.interface';
import iService from '@interfaces/service.interface';
import { returnCreated, returnDeleted, returnJson200, returnUpdated } from '@helpers/response.helper';
import { get } from 'lodash';
let _service = null;

class BaseController implements iController {
    public router = express.Router();
    public path: String
    static instance: iController;

    constructor(service: iService, path: String) {
        _service = service
        this.path = path
    }

    initRoutes() {
        this.router.post(`/`, this.create);
        this.router.patch(`/:id`, this.update);
        this.router.post(`/search`, this.getAll);
        this.router.get(`/:id`, this.getById);
        this.router.delete(`/:id`, this.delete);
        return this.router
    }

    async create (req, res) {
        const modelData = get(req, 'body');
        const modelCreated = await _service.create(modelData);
        returnCreated(res, modelCreated);
    }

    async getById(req, res) {
        const id = get(req, 'params.id');
        const model = _service.get(id);

        returnJson200(res, model);
    }

    async getAll(req, res) {
        const fields = get(req, 'body.fields', '');
        const filters = get(req, 'body.filters', '');
        const populate = get(req, 'body.populate', '');
        const queryParams = get(req, 'query');

        const results = await _service.getAllWithPagination(queryParams, filters, fields, populate); 
        
        returnJson200(res, results);
    }

    async update(req, res) {
        const modelData = get(req, 'body');
        const _id = get(req, 'params._id');
        const modelUpdated = await _service.update(_id, modelData);

        returnUpdated(res, modelUpdated);
    }

    async delete(req, res) {
        const _id = get(req, 'params._id');
        await _service.delete(_id);

        returnDeleted(res, _id)
    }
}

export default BaseController;