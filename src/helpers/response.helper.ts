export function returnCreated(res, json) {
    res.status(201).json(json);
}

export function returnUpdated(res, json) {
    res.status(200).json(json);
}

export function returnDeleted(res, id) {
    res.status(204).json(id);
}

export function returnJson200(res, json) {
    res.status(200).json(json);
}
