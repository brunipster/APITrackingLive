import iRepository from "./repository.interface";

interface iService {
    repository: iRepository
    get(id: String, fields?: Object): Object;
    getAll(query: Object, propertiesToRetrive: Object): Object;
    getAllWithPagination(queryParams: Object, filters: Object, fields: Object, populate: Array<any>): Object;
    getByProperties(propertiesObject: Object, propertiesToRetrive: Object): Object;
    create(entity: Object): Object;
    update(id: String, entity: Object): Object;
    delete(id: String): Object;
}
export default iService