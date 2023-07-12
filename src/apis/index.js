import axios from "axios";
import { BASE_URL, API_KEY } from "~config";

const axiosInstance = axios.create({
    baseURL: BASE_URL
})
export const getApi = async (url, searchParamsObject = {}) => {
    const searchParams = new URLSearchParams({ api_key: API_KEY, ...searchParamsObject }).toString()
    console.log({ searchParams })
    return axiosInstance.get(`${url}?${searchParams}`)
        .then((res) => res)
        .catch((err) => err)
}

