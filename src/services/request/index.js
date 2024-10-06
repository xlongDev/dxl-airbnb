import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"

class DXLRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      // 可以在这里处理错误，例如抛出异常或返回一个错误对象
      console.error(err);
      return Promise.reject(err);
    });
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get"})
  }

  post (config) {
    return this.request({ ...config, method: "post" })
  }
}

const XLRequest = new DXLRequest(BASE_URL, TIMEOUT)
export default XLRequest