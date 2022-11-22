const axios = require("axios");

async function getDataSource() {
  const apiClient = axios.create({
    baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
  });

  const response = await apiClient.get("newsList");

  const nTitle1 = response.data.result[9].nTitle;
  const nDate1 = response.data.result[9].nDate;
  const nLink1 = response.data.result[9].nLink;

  const nTitle2 = response.data.result[8].nTitle;
  const nDate2 = response.data.result[8].nDate;
  const nLink2 = response.data.result[8].nLink;

  const nTitle3 = response.data.result[7].nTitle;
  const nDate3 = response.data.result[7].nDate;
  const nLink3 = response.data.result[7].nLink;

  const nTitle4 = response.data.result[6].nTitle;
  const nDate4 = response.data.result[6].nDate;
  const nLink4 = response.data.result[6].nLink;

  const nTitle5 = response.data.result[5].nTitle;
  const nDate5 = response.data.result[5].nDate;
  const nLink5 = response.data.result[5].nLink;

  const nTitle6 = response.data.result[4].nTitle;
  const nDate6 = response.data.result[4].nDate;
  const nLink6 = response.data.result[4].nLink;

  const nTitle7 = response.data.result[3].nTitle;
  const nDate7 = response.data.result[3].nDate;
  const nLink7 = response.data.result[3].nLink;

  const nTitle8 = response.data.result[2].nTitle;
  const nDate8 = response.data.result[2].nDate;
  const nLink8 = response.data.result[2].nLink;

  const nTitle9 = response.data.result[1].nTitle;
  const nDate9 = response.data.result[1].nDate;
  const nLink9 = response.data.result[1].nLink;

  const nTitle10 = response.data.result[0].nTitle;
  const nDate10 = response.data.result[0].nDate;
  const nLink10 = response.data.result[0].nLink;

  return {
    lastUpdated: Date.now(),
    nTitle1,
    nDate1,
    nLink1,
    nTitle2,
    nDate2,
    nLink2,
    nTitle3,
    nDate3,
    nLink3,
    nTitle4,
    nDate4,
    nLink4,
    nTitle5,
    nDate5,
    nLink5,
    nTitle6,
    nDate6,
    nLink6,
    nTitle7,
    nDate7,
    nLink7,
    nTitle8,
    nDate8,
    nLink8,
    nTitle9,
    nDate9,
    nLink9,
    nTitle10,
    nDate10,
    nLink10,
  };
}

module.exports = { getDataSource };
