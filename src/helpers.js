import axios from 'axios'

const token = process.env.TOKEN || ''
export const axiosInstance = axios.create({
    baseURL: `https://api.salesloft.com/v2/people.json`,
    Authorization: `Bearer ${token}`
})