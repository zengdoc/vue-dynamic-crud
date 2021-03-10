/**
 * 获取请求query内容
 */
interface QueryVariableRes {
    [key: string]: any;
}
export function getQueryVariable(url: string): QueryVariableRes {
    const query = url.slice(url.indexOf('?') + 1);
    const queryArr = query.split('&');
    const result = {};
    queryArr.forEach(i => {
        const paramKey = i.split('=')[0];
        const paramValue = i.split('=')[1];
        result[paramKey] = decodeURI(paramValue);
    });
    return result;
}

/**
 * 启用全屏
 * @param  element 元素
 * @param  options 选项
 * @returns
 */
export function launchFullScreen(element: HTMLElement, options?: FullscreenOptions): Promise<void> {
    const requestMethod = element.requestFullscreen
        || element.mozRequestFullScreen
        || element.msRequestFullscreen
        || element.webkitRequestFullscreen;
    if (requestMethod) {
        return requestMethod.call(element, options);
    }
    return Promise.reject();
}

/**
 * 退出全屏
 * @returns
 */
export function exitFullScreen(): Promise<void> {
    const requestMethod = document.exitFullscreen
        || document.mozCancelFullScreen
        || document.msExitFullscreen
        || document.webkitExitFullscreen;
    if (requestMethod) {
        return requestMethod.call(document);
    }
    return Promise.reject();
}

/**
 * 处于全屏模式
 * @returns
 */
export function isFullScreen() {
    return null !== (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullScreenElement ||
        document.webkitFullscreenElement ||
        null
    );
}

/**
 * 深冻结函数
 * @param obj 需要冻结的对象
 */
export function deepFreeze(obj) {
    const propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach(name => {
        const prop = obj[name];
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}
