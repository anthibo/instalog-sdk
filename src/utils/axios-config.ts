import axios from 'axios'

export const instalogApi = 'http://127.0.0.1:3000/api';

export const axiosClient = axios.create({ baseURL: instalogApi })
