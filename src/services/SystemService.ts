import ApiService from "@/services/ApiService";


export async function apiAllSystemEntity<T>(
    endpoint: string
) {
    return ApiService.fetchData<T>({
        url: endpoint,
        method: 'get'
    })
}

export async function apiOverviewSystemEntity<T, U extends Record<string, unknown>>(
    endpoint: string,
    data: U
) {
    return ApiService.fetchData<T>({
        url: endpoint,
        method: 'post',
        data
    })
}

export async function apiPostDataSystem<
    T,
    U extends Record<string, unknown>
>(
    endpoint: string,
    data: U
) {
    return ApiService.fetchData<T>({
        url: endpoint,
        method: 'post',
        data
    })
}

export async function apiCreateSystemEntity<
    T,
    U extends Record<string, unknown>
>(
    endpoint: string,
    data: U
) {
    return ApiService.fetchData<T>({
        url: endpoint,
        method: 'post',
        data
    })
}

export async function apiUpdateSystemEntity<
    T,
    U extends Record<string, unknown>,
>(
    endpoint: string,
    data: U,
    id: string
) {
    return ApiService.fetchData<T>({
        url: `${endpoint}/${id}`,
        method: 'put',
        data
    })
}

export async function apiDeleteSystemEntity<
    T,
    U extends Record<string, unknown>
>(
    endpoint: string,
    data: U
) {
    return ApiService.fetchData<T>({
        url: endpoint,
        method: 'delete',
        data
    })
}

export async function apiDetailSystemEntity<
    T
>(
    endpoint: string,
    id: string
) {
    return ApiService.fetchData<T>({
        url: `${endpoint}/${id}`,
        method: 'get'
    })
}

export async function apiToggleSystemEntity<
    T,
>(
    endpoint: string,
) {
    return ApiService.fetchData<T>({
        url: `${endpoint}`,
        method: 'put',
    })
}

export async function apiSendFormDataSystemEntity<
    T,
    U extends Record<string, unknown>
>(
    endpoint: string,
    data: U
) {
    return ApiService.fetchData<T>({
        url: endpoint,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: data
    })
}

export async function apiUpdateFileToPreUrl<T>(
    endpoint: string,
    file: Blob | File | ArrayBuffer,
) {
    return ApiService.fetchData<T>({
        url: `${endpoint}`,
        method: 'put',
        data: file as unknown as Record<string, unknown>
    });
}