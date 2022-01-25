export function parseHtmlDate(s) {
    const b = s.split(/\D/)
    return new Date(b[0], --b[1], b[2])
}


export function convertStringToHtmlDateString(s) {
    if (!s) return null
    const arr = s.split('.')
    return arr[2] + '-' + arr[1] + '-' + arr[0]
}


export function isDateRangeIncluded(min, max, rangeStart, rangeEnd) {
    const matchFirstPossibleDate =
        min && rangeStart
            ? rangeStart >= min
            : true
    const matchLastPossibleDate =
        max && rangeEnd
            ? rangeEnd <= max
            : true
    return matchFirstPossibleDate && matchLastPossibleDate
}