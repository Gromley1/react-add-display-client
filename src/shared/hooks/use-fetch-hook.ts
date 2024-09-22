// import { useAsync } from './use-async.hook';

// const DEFAULT_OPTIONS: RequestInit = {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

// export const useFetch = <T>(url: string, options = {}, dependencies: any[] = []) => {
//     return useAsync<T>(() => {
//         return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
//             if (res.ok) return res.json();
//             return res.json().then(json => Promise.reject(json))
//         })
//     }, dependencies)
// }

