const axios = require("axios");

class ApiClientKcnetTech {
  constructor() {
    // HTTP 클라이언트
    const client = axios.create({
      baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
    });

    // 응답에 대한 인터셉터를 등록하면 모든 응답에 대해 여기 등록된 함수 수행
    client.interceptors.response.use((resp) => {
      return resp.data;
    });

    this.client = client;
  }

  // kcnetTech update API 호출
  async updateKcnetTech(data) {
    return await this.client.post("kcnetTech", data);
  }
}

class ApiClientKcnetNot {
  constructor() {
    // HTTP 클라이언트
    const client = axios.create({
      baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
    });

    // 응답에 대한 인터셉터를 등록하면 모든 응답에 대해 여기 등록된 함수 수행
    client.interceptors.response.use((resp) => {
      return resp.data;
    });

    this.client = client;
  }

  // kcnetNot update API 호출
  async updateKcnetNot(data) {
    return await this.client.post("kcnetNot", data);
  }
}

class ApiClientKcnetNews {
  constructor() {
    // HTTP 클라이언트
    const client = axios.create({
      baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
    });

    // 응답에 대한 인터셉터를 등록하면 모든 응답에 대해 여기 등록된 함수 수행
    client.interceptors.response.use((resp) => {
      return resp.data;
    });

    this.client = client;
  }

  // kcnetNews update API 호출
  async updateKcnetNews(data) {
    return await this.client.post("kcnetNews", data);
  }
}

module.exports = { ApiClientKcnetTech, ApiClientKcnetNot, ApiClientKcnetNews };
