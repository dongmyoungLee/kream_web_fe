import {apiClient} from "./ApiClient";

export const userGet = () => apiClient.get('/api/v1/user')


