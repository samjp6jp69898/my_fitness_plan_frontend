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
    return await _post(`/users`, data)
}

export const getUserInfoByName = async (name) => {
    return await _get(`/users/${name}`)
}
