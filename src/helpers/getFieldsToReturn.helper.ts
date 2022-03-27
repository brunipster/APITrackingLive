function getFieldsToReturn(params) {
    const fields = params.fields || '{}';
    const fieldsAsObject = JSON.parse(fields);
    return fieldsAsObject;
}

export default getFieldsToReturn;