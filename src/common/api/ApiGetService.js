import {apiClient} from "./ApiClient";

export const mbtiResult = () => apiClient.get('/questions/results')
