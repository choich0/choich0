const axios = require("axios");

class ApiClientKffaAnn {
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

  // kffaAnn update API 호출
  async updateKffaAnn(data) {
    return await this.client.post("kffaAnn", data);
  }
}

class ApiClientKffaNot {
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

  // kffaNot update API 호출
  async updateKffaNot(data) {
    return await this.client.post("kffaNot", data);
  }
}

class ApiClientKffaRaw {
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

  // kffaRaw update API 호출
  async updateKffaRaw(data) {
    return await this.client.post("kffaRaw", data);
  }
}

module.exports = { ApiClientKffaAnn, ApiClientKffaNot, ApiClientKffaRaw };
