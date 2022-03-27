import getFieldsToReturn from "@helpers/getFieldsToReturn.helper";
import { validateQueryString, validateSortValue } from "@helpers/validation.helpers";
import throwError from "@helpers/throwError.helper";
import iRepository from "@interfaces/repository.interface";
import iService from "@interfaces/service.interface";
import { isEmpty } from "lodash";
import { pagination } from "@helpers/pagination.helpers";


class BaseServices implements iService {
    repository: iRepository
    static instance: BaseServices;

    constructor(repository: iRepository) {
        this.repository = repository
    }

    async get(id: String, fields: Object) {
        if(!id) {
            const message = 'Errors ID';
            throwError(400, message);
        }

        const fieldsObject = getFieldsToReturn(fields);
        const currentEntity = await this.repository.get(id, fieldsObject);

        if(!currentEntity) {
            const message = 'Not found';
            throwError(400, message);
        }

        return currentEntity;
    };

    async getAll(query: Object, propertiesToRetrive: Object) {
        return await this.repository.getAll(query, propertiesToRetrive);
    };

    async getAllWithPagination(queryParams: Object, filters: Object, fields: Object, populate: Array<any>) {
        const limit = validateQueryString(queryParams, 'limit');
        const page = validateQueryString(queryParams, 'page');
        const { skip, limitTo } = pagination(page, limit);

        const date = validateSortValue(queryParams, 'date_sorting');
        const sort = { date }

        return await this.repository.getAllWithPagination(filters, fields, sort, skip, limitTo, populate)
    };

    async getByProperties(propertiesObject: Object, propertiesToRetrive: Object) {
        return await this.repository.getByProperties(propertiesObject, propertiesToRetrive);
    };
    async create(entity: Object) {
        const entityEmpty = isEmpty(entity);
        if(entityEmpty) {
            const message = 'Not created';
            throwError(400, message);
        }

        return await this.repository.create(entity);
    };
    async update(id: String, entity: Object) {
        if(!id) {
            const message = 'No id';
            throwError(400, message);
        }

        const entityEmpty = isEmpty(entity);
        if(!entityEmpty) {
            const message = 'NO DATA UPDATE';
            throwError(400, message);
        }

        const date = new Date();
        const edition_date = date.toISOString();
        const entityUpdated = { ...entity, edition_date};

        if(!entityUpdated) {
            const message = 'Not found';
            throwError(404, message);
        }

        return entityUpdated;
    };

    async delete(id: String) {
        if(!id) {
            const message = 'No id';
            throwError(400, message);
        }

        const entityDeleted = await this.repository.delete(id);

        if(!entityDeleted) {
            const message = 'Not found';
            throwError(404, message);
        }

        return  entityDeleted;
    };
}

export default BaseServices;