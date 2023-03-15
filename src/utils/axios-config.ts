import axios from 'axios'

export const instalogApi = 'https://instalog-backend-production.up.railway.app/api';

export const axiosClient = axios.create({ baseURL: instalogApi })
