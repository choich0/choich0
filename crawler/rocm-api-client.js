const axios = require("axios");

class ApiClientSRocm {
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

  // sRocm update API 호출
  async updateSRocm(data) {
    return await this.client.post("sRocm", data);
  }
}

class ApiClientWRocm {
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

  // wRocm update API 호출
  async updateWRocm(data) {
    return await this.client.post("wRocm", data);
  }
}

class ApiClientDRocm {
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

  // dRocm update API 호출
  async updateDRocm(data) {
    return await this.client.post("dRocm", data);
  }
}

class ApiClientBRocm {
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

  // bRocm update API 호출
  async updateBRocm(data) {
    return await this.client.post("bRocm", data);
  }
}

class ApiClientIRocm {
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
  
    // iRocm update API 호출
    async updateIRocm(data) {
      return await this.client.post("iRocm", data);
    }
  }

module.exports = { ApiClientSRocm, ApiClientWRocm, ApiClientDRocm, ApiClientBRocm, ApiClientIRocm };
