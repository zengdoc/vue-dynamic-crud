import Axios from 'axios';
import { Message } from 'element-ui';

const request = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 3000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
});

// 添加请求拦截器
request.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(response => {
    const res = response.data;
    if (res.status === 0) {
        return Promise.resolve(res);
    } else {
        Message({
            message: _.get(response, 'data.message') || '出错了,请稍后再试',
            type: 'error',
            duration: 3 * 1000,
        });
        return Promise.reject(res);
    }
}, error => {
    // 对响应错误做点什么
    Message({
        message: _.get(error, 'response.data.message') || '出错了,请稍后再试',
        type: 'error',
        duration: 3 * 1000,
    });
    return Promise.reject(error);
});

export default request;
