const axios = require("axios");

class ApiClientGgnewsExt {
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

  // ggnewsExt update API 호출
  async updateGgnewsExt(data) {
    return await this.client.post("ggnewsExt", data);
  }
}

class ApiClientGgnewsFac {
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

  // ggnewsFac update API 호출
  async updateGgnewsFac(data) {
    return await this.client.post("ggnewsFac", data);
  }
}

class ApiClientGgnewsSem {
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

  // ggnewsSem update API 호출
  async updateGgnewsSem(data) {
    return await this.client.post("ggnewsSem", data);
  }
}

module.exports = { ApiClientGgnewsExt, ApiClientGgnewsFac, ApiClientGgnewsSem };
