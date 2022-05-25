export const launchNativeApp = ({
    isMobile = false,
    autoStartToken,
    redirect = null,
}) => {
    // if redirect, the redirect URL should use HTTPS

    let currentUrl

    // desktop device
    if (!isMobile) {
        currentUrl = `bankid:///?autostarttoken=${autoStartToken}&redirect=${redirect}`
    }

    // mobile device
    if (isMobile) {
        currentUrl = `https://app.bankid.com/?autostarttoken=${autoStartToken}&redirect=${redirect}`
    }

    // _self -> opens url in the same tab
    window.open(currentUrl, '_self')
}