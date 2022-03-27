import iRepository from "@interfaces/repository.interface";
import { Model } from "mongoose";

class BaseRepository implements iRepository {
    model: Model<any>;
    static instance: BaseRepository;
    
    constructor(model: Model<any>) {
        this.model = model
    }

    async get(id, fields) {
        return await this.model.findById(id, fields);
    };
    
    async getOne(query, fields) {
        return await this.model.findOne(query, fields);
    };

    async getAll(query, propertiesToRetrive, populate = []) {
        return await this.model.find(query, propertiesToRetrive).populate(populate);
    };

    async getAllWithPagination(filters: Object, fields: Object, sort: Object, skip: number, limit: number, populate: Array<any>) {
        return await this.model.find(filters, fields).populate(populate).sort(sort).skip(skip).limit(limit)
    };
    
    async getByProperties(propertiesObject: Object, propertiesToRetrive: Object) {
        return await this.model.find(propertiesObject, propertiesToRetrive);
    };

    async create(entity: Object) {
        return await this.model.create(entity);
    };

    async createMany(entities: Array<Object>) {
        return await this.model.insertMany(entities);
    };

    async update(id: String, entity: Object) {
        return await this.model.findByIdAndUpdate(id, entity, { new: true, upsert: false});
    };

    async delete(id: String) {
        return await this.model.findByIdAndDelete(id);
    };

}

export default BaseRepository;