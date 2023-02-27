const axios = require("axios");

class ApiClientPropMk {
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

  // propMk update API 호출
  async updatePropMk(data) {
    return await this.client.post("propMk", data);
  }
}

class ApiClientPropFn {
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

  // propFn update API 호출
  async updatePropFn(data) {
    return await this.client.post("propFn", data);
  }
}

class ApiClientPropKld {
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

  // propKld update API 호출
  async updatePropKld(data) {
    return await this.client.post("propKld", data);
  }
}

class ApiClientPropDnews {
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

  // propDnews update API 호출
  async updatePropDnews(data) {
    return await this.client.post("propDnews", data);
  }
}

module.exports = { ApiClientPropMk, ApiClientPropFn, ApiClientPropKld, ApiClientPropDnews };
