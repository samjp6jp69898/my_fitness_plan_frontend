import axios from 'axios';
import config from '@/config'

export const test = async () => {
    return await axios.get(`${config.apiBaseUrl}/`)
}
