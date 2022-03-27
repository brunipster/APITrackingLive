import { Model } from "mongoose";

interface iRepository {
    model: Model<any>;
    get(id: String, fields?: Object): Object;
    getOne(query: Object, fields?: Object): Object;
    getAll(query: Object, propertiesToRetrive: Object, populate?: Array<any>): Object;
    getAllWithPagination(filters: Object, fields: Object, sort: Object, skip: Number, limit: number, populate: Array<any>): Object;
    getByProperties(propertiesObject: Object, propertiesToRetrive: Object): Object;
    create(entity: Object): Object;
    createMany(entities: Array<Object>): Object;
    update(id: String, entity: Object): Object;
    delete(id: String): Object;
}
export default iRepository