import { axiosClient } from "./utils/axios-config";

export class HttpClient {
    constructor(
        private readonly secretKey: string
    ) { }

    async postRequest<RequestBody, Response>(endpoint: string, body: RequestBody) {
        return await axiosClient.post<Response>(endpoint, body, {
            headers: {
                secret_key: this.secretKey
            }
        });
    }

    async getRequest<Response>(endpoint: string) {
        const response = await axiosClient.get<Response>(endpoint, {
            headers: {
                secret_key: this.secretKey
            }
        });
        return response;
    }

}