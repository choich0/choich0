const axios = require("axios");

class ApiClientSaramPlan {
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

  // saramPlan update API 호출
  async updateSaramPlan(data) {
    return await this.client.post("saramPlan", data);
  }
}

class ApiClientSaramEval {
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

  // saramEval update API 호출
  async updateSaramEval(data) {
    return await this.client.post("saramEval", data);
  }
}

class ApiClientSaramGroup {
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

  // saramGroup update API 호출
  async updateSaramGroup(data) {
    return await this.client.post("saramGroup", data);
  }
}

class ApiClientSaramPol {
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

  // saramPol update API 호출
  async updateSaramPol(data) {
    return await this.client.post("saramPol", data);
  }
}

class ApiClientSaramTrend {
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
  
    // saramTrend update API 호출
    async updateSaramTrend(data) {
      return await this.client.post("saramTrend", data);
    }
  }

module.exports = { ApiClientSaramPlan, ApiClientSaramEval, ApiClientSaramGroup, ApiClientSaramPol, ApiClientSaramTrend };
