const axios = require("axios");

class ApiClientFireFpn {
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

  // fireFpn update API 호출
  async updateFireFpn(data) {
    return await this.client.post("fireFpn", data);
  }
}

class ApiClientFireNfa {
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

  // fireNfa update API 호출
  async updateFireNfa(data) {
    return await this.client.post("fireNfa", data);
  }
}

class ApiClientFireLaw {
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

  // fireLaw update API 호출
  async updateFireLaw(data) {
    return await this.client.post("fireLaw", data);
  }
}

class ApiClientFireInfo {
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

  // fireInfo update API 호출
  async updateFireInfo(data) {
    return await this.client.post("fireInfo", data);
  }
}

module.exports = { ApiClientFireFpn, ApiClientFireNfa, ApiClientFireLaw, ApiClientFireInfo };
