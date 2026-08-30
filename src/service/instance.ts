import axios from "axios";
import { BASE_URLS } from "./urls";

const Client=axios.create()
Client.defaults.baseURL=BASE_URLS.BASE_URL

Client.interceptors.request.use(
  (config) => {
    
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Client.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default Client