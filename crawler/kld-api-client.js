const axios = require("axios");

class ApiClientKldCon {
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

  // kldCon update API 호출
  async updateKldCon(data) {
    return await this.client.post("kldCon", data);
  }
}

class ApiClientKldCm {
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

  // kldCm update API 호출
  async updateKldCm(data) {
    return await this.client.post("kldCm", data);
  }
}

class ApiClientKldTech {
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

  // kldTech update API 호출
  async updateKldTech(data) {
    return await this.client.post("kldTech", data);
  }
}

class ApiClientKldSafety {
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

  // kldSafety update API 호출
  async updateKldSafety(data) {
    return await this.client.post("kldSafety", data);
  }
}

module.exports = { ApiClientKldCon, ApiClientKldCm, ApiClientKldTech, ApiClientKldSafety };
