const axios = require("axios");

class ApiClientKeeaAnn {
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

  // keeaAnn update API 호출
  async updateKeeaAnn(data) {
    return await this.client.post("keeaAnn", data);
  }
}

class ApiClientKeeaRaw {
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

  // keeaRaw update API 호출
  async updateKeeaRaw(data) {
    return await this.client.post("keeaRaw", data);
  }
}

module.exports = { ApiClientKeeaAnn, ApiClientKeeaRaw };
