const axios = require("axios");

class ApiClientInsaEdu {
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

  // insaEdu update API 호출
  async updateInsaEdu(data) {
    return await this.client.post("insaEdu", data);
  }
}

class ApiClientInsaHr {
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

  // insaHr update API 호출
  async updateInsaHr(data) {
    return await this.client.post("insaHr", data);
  }
}

module.exports = { ApiClientInsaEdu, ApiClientInsaHr };
