import axios from 'axios'

export const instalogApi = 'localhost:3000/api/';

export const axiosClient = axios.create({ baseURL: instalogApi })
