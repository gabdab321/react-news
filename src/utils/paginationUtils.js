export function countTotalPages(total, limit) {
    return Math.ceil(total / limit)
}

export function getOffsetByPage(page, limit) {
    return Math.floor(page * limit)
}