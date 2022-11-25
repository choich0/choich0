const axios = require("axios");

class ApiClientDnewsStd {
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

  // dnewsStd update API 호출
  async updateDnewsStd(data) {
    return await this.client.post("dnewsStd", data);
  }
}

class ApiClientDnewsEng {
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

  // dnewsEng update API 호출
  async updateDnewsEng(data) {
    return await this.client.post("dnewsEng", data);
  }
}

class ApiClientDnewsTech {
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

  // dnewsTech update API 호출
  async updateDnewsTech(data) {
    return await this.client.post("dnewsTech", data);
  }
}

class ApiClientDnewsMat {
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

  // dnewsMat update API 호출
  async updateDnewsMat(data) {
    return await this.client.post("dnewsMat", data);
  }
}

class ApiClientDnewsSafety {
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
  
    // dnewsSafety update API 호출
    async updateDnewsSafety(data) {
      return await this.client.post("dnewsSafety", data);
    }
  }

module.exports = { ApiClientDnewsStd, ApiClientDnewsEng, ApiClientDnewsTech, ApiClientDnewsMat, ApiClientDnewsSafety };
