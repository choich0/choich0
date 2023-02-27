const axios = require("axios");

class ApiClientAncCm {
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

  // ancCm update API 호출
  async updateAncCm(data) {
    return await this.client.post("ancCm", data);
  }
}

class ApiClientAncSafety {
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

  // ancSafety update API 호출
  async updateAncSafety(data) {
    return await this.client.post("ancSafety", data);
  }
}

class ApiClientAncPol {
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

  // ancPol update API 호출
  async updateAncPol(data) {
    return await this.client.post("ancPol", data);
  }
}

class ApiClientAncGre {
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

  // ancGre update API 호출
  async updateAncGre(data) {
    return await this.client.post("ancGre", data);
  }
}

module.exports = { ApiClientAncCm, ApiClientAncSafety, ApiClientAncPol, ApiClientAncGre };
