import { get as _get, isString as _isString, parseInt } from 'lodash'

export function validateQueryString(filter, field) {
    const extractedField = _get(filter, field);
    const isString = _isString(extractedField);
    if(extractedField && isString) {
        return parseInt(extractedField);
    }
    return extractedField;
}

export function validateSortValue(filter, field) {
    const extractedField = _get(filter, field, null);
    const isString = _isString(extractedField);
    let parsedValue = extractedField;
    if(extractedField && isString) {
        parsedValue = parseInt(extractedField);
    }

    if(parsedValue === 1 || parsedValue === -1) {
        return parsedValue;
    }
}