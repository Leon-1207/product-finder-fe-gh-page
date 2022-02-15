const TEST_HOST_ID = '57'
const TEST_PROVIDER_ID = '2'
const DEFAULT_FILTER_MENU_BG_IMG_SRC_URL = "https://www.voucherwonderland.com/reisemagazin/wp-content/uploads/2018/02/Strand-von-Scharbeutz.jpg"


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


function getSetFromWrapperAttribute(attributeName) {
    const wrapperElement = getProductFinderWrapperElement()
    if (!wrapperElement) return new Set([])

    const disabledKeysAttribute = wrapperElement.getAttribute(attributeName)
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


export function getSetOfDeactivatedFilterKeys() {
    return getSetFromWrapperAttribute('data-disabled-filters')
}


export function getSetOfDeactivatedDestinationIds() {
    return getSetFromWrapperAttribute('data-disabled-destinations')
}


function getFilterMenuBgImgSrcFromProductFinderWrapper() {
    const wrapper = getProductFinderWrapperElement()
    if (!wrapper) return null
    const attributeValue = wrapper.getAttribute("data-filter-background-img-src").trim()
    return typeof attributeValue === "string" && attributeValue.length > 0 ? attributeValue : null
}


export function getFilterMenuBgImgSrc() {
    return getFilterMenuBgImgSrcFromProductFinderWrapper() || DEFAULT_FILTER_MENU_BG_IMG_SRC_URL
}