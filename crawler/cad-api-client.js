const axios = require("axios");

class ApiClientCadTv {
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

  // cadTv update API 호출
  async updateCadTv(data) {
    return await this.client.post("cadTv", data);
  }
}

class ApiClientCadSpe {
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

  // cadSpe update API 호출
  async updateCadSpe(data) {
    return await this.client.post("cadSpe", data);
  }
}

class ApiClientCadLec {
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

  // cadLec update API 호출
  async updateCadLec(data) {
    return await this.client.post("cadLec", data);
  }
}

class ApiClientCadNews {
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

  // cadNews update API 호출
  async updateCadNews(data) {
    return await this.client.post("cadNews", data);
  }
}

module.exports = { ApiClientCadTv, ApiClientCadSpe, ApiClientCadLec, ApiClientCadNews };
