export function isIOS() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
}

export function isAndroid() {
    return /(Android)/i.test(navigator.userAgent)
}

export function isWeb() {
    return true
}

export function isWechat() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger'
}

export default {
    isIOS,
    isAndroid,
    isWeb,
}