export function countTotalPages(total, limit) {
    return Math.ceil(total / limit)
}

export function getCurrentPageOffset(page, limit) {
    return Math.floor(page * limit)
}

export function getPageByOffset(offset, limit) {
    return Math.floor(offset / limit)
}