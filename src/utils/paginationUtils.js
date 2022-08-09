export function countTotalPages(total, limit) {
    return Math.ceil(total / limit)
}

export function getCurrentPageOffset(page, limit) {
    return Math.floor(page * limit)
}