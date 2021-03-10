import request from './index';

interface GetAccountType {
    pageNo: number;
    pageSize: number;
}
export function getAccountApi(params: GetAccountType) {
    return request.get(
        `/account`,
        {
            params,
        },
    );
}

export function createAccountApi(params: string[]) {
    return request.post(
        `/account`,
        params,
    );
}

export function updateAccountApi(params: string[]) {
    return request.put(
        `/account`,
        params,
    );
}

export function deleteAccountApi(ids: string[]) {
    return request.delete(
        `/account`,
        {
            params: ids,
        },
    );
}
