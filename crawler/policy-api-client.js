const axios = require("axios");

class ApiClientPolicyDh {
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

  // policyDh update API 호출
  async updatePolicyDh(data) {
    return await this.client.post("policyDh", data);
  }
}

class ApiClientPolicyLe {
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

  // policyLe update API 호출
  async updatePolicyLe(data) {
    return await this.client.post("policyLe", data);
  }
}

class ApiClientPolicyCon {
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

  // policyCon update API 호출
  async updatePolicyCon(data) {
    return await this.client.post("policyCon", data);
  }
}

class ApiClientPolicyMc {
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
  
    // policyMc update API 호출
    async updatePolicyMc(data) {
      return await this.client.post("policyMc", data);
    }
  }

module.exports = { ApiClientPolicyDh, ApiClientPolicyLe, ApiClientPolicyCon, ApiClientPolicyMc };
