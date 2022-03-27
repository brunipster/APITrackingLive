export function pagination(page, limit) {
    let currentPage = page;
    let currentLimit = limit;

    if(!page || page < 1) {
        currentPage = 1
    }

    if(!limit || limit < 1) {
        currentLimit = 10
    }

    if(limit < 0) {
        currentLimit = null;
    }

    const superiorLimit = currentLimit * currentPage;
    const skip = superiorLimit - currentLimit;
    return { skip, limitTo: currentLimit };
}