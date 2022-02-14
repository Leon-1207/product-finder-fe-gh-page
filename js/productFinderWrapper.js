const TEST_HOST_ID = '57'
const TEST_PROVIDER_ID = '2'


function isLocalTestMode() {
    return (
        String(document.URL).includes('localhost') &&
        !getProductFinderWrapperElement()
    )
}


function getProductFinderWrapperElement() {
    return document.getElementById("product-finder-wrapper")
}


export function getProviderIdFromProductFinderWrapper() {
    // localhost test mode
    if (isLocalTestMode()) return TEST_PROVIDER_ID

    // production mode
    const wrapperElement = getProductFinderWrapperElement()
    if (!wrapperElement) return null
    const providerId = wrapperElement.getAttribute('data-anbieter-id')
    return typeof providerId === 'string' && providerId.length > 0
        ? providerId
        : null
}


export function getHostIdFromProductFinderWrapper() {
    // localhost test mode
    if (isLocalTestMode()) return TEST_HOST_ID

    // production mode
    const wrapper = getProductFinderWrapperElement();
    if (!wrapper) return null
    const attributeValue = wrapper.getAttribute("data-host-id")
    return typeof attributeValue === "string" && attributeValue.length > 0 ? attributeValue : null
}


export function getSetOfDeactivatedFilterKeys() {
    const wrapperElement = getProductFinderWrapperElement()
    if (!wrapperElement) return new Set([])

    const disabledKeysAttribute = wrapperElement.getAttribute(
        'data-disabled-filters'
    )
    if (
        typeof disabledKeysAttribute === 'string' &&
        disabledKeysAttribute.length > 0
    ) {
        const keysArray = disabledKeysAttribute
            .split(',')
            .map((value) => value.trim())
            .filter((str) => str.length > 0)
        return new Set(keysArray)
    }
    return new Set([])
}