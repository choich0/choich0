const axios = require("axios");

class ApiClientMolitCity {
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

  // molitCity update API 호출
  async updatemolitCity(data) {
    return await this.client.post("molitCity", data);
  }
}

class ApiClientMolitLand {
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

  // molitLand update API 호출
  async updatemolitLand(data) {
    return await this.client.post("molitLand", data);
  }
}

class ApiClientMolitCon {
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

  // molitCon update API 호출
  async updatemolitCon(data) {
    return await this.client.post("molitCon", data);
  }
}

class ApiClientMolitGen {
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

  // molitGen update API 호출
  async updatemolitGen(data) {
    return await this.client.post("molitGen", data);
  }
}

module.exports = { ApiClientMolitCity, ApiClientMolitLand, ApiClientMolitCon, ApiClientMolitGen };
