import axios from 'axios';
import config from '@/config'

function _get(path, data) {
    return axios.get(`${config.apiBaseUrl}${path}`, data)
}

function _post(path, data) {
    return axios.post(`${config.apiBaseUrl}${path}`, data)
}

export const test = async () => {
    return await _get(`/`)
}

export const addUser = async (data) => {
    try {
        const res = await _post(`/users`, data)
        return res
    } catch (e) {
        if (e.response.status === 500) {
            throw '使用者姓名已存在'
        }
        throw e
    }
}

export const getUserInfoByName = async (name) => {
    return await _get(`/users/${name}`)
}
