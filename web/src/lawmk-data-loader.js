const axios = require("axios");

async function getLawmk() {
  const apiClient = axios.create({
    baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
  });

  const response = await apiClient.get("lawmkOp");
  const result = response.data.result;

  const nTitle1_1 = result[result.length -1].nTitle;
  const nDate1_1 = result[result.length -1].nDate;
  const nLink1_1 = result[result.length -1].nLink;

  const nTitle1_2 = result[result.length -2].nTitle;
  const nDate1_2 = result[result.length -2].nDate;
  const nLink1_2 = result[result.length -2].nLink;

  const nTitle1_3 = result[result.length -3].nTitle;
  const nDate1_3 = result[result.length -3].nDate;
  const nLink1_3 = result[result.length -3].nLink;

  const nTitle1_4 = result[result.length -4].nTitle;
  const nDate1_4 = result[result.length -4].nDate;
  const nLink1_4 = result[result.length -4].nLink;

  const nTitle1_5 = result[result.length -5].nTitle;
  const nDate1_5 = result[result.length -5].nDate;
  const nLink1_5 = result[result.length -5].nLink;

  const nTitle1_6 = result[result.length -6].nTitle;
  const nDate1_6 = result[result.length -6].nDate;
  const nLink1_6 = result[result.length -6].nLink;

  const nTitle1_7 = result[result.length -7].nTitle;
  const nDate1_7 = result[result.length -7].nDate;
  const nLink1_7 = result[result.length -7].nLink;

  const nTitle1_8 = result[result.length -8].nTitle;
  const nDate1_8 = result[result.length -8].nDate;
  const nLink1_8 = result[result.length -8].nLink;

  const nTitle1_9 = result[result.length -9].nTitle;
  const nDate1_9 = result[result.length -9].nDate;
  const nLink1_9 = result[result.length -9].nLink;

  const nTitle1_10 = result[result.length -10].nTitle;
  const nDate1_10 = result[result.length -10].nDate;
  const nLink1_10 = result[result.length -10].nLink;

  const nTitle1_11 = result[result.length -1].nTitle;
  const nDate1_11 = result[result.length -1].nDate;
  const nLink1_11 = result[result.length -1].nLink;

  const nTitle1_12 = result[result.length -2].nTitle;
  const nDate1_12 = result[result.length -2].nDate;
  const nLink1_12 = result[result.length -2].nLink;

  const nTitle1_13 = result[result.length -3].nTitle;
  const nDate1_13 = result[result.length -3].nDate;
  const nLink1_13 = result[result.length -3].nLink;

  const nTitle1_14 = result[result.length -4].nTitle;
  const nDate1_14 = result[result.length -4].nDate;
  const nLink1_14 = result[result.length -4].nLink;

  const nTitle1_15 = result[result.length -5].nTitle;
  const nDate1_15 = result[result.length -5].nDate;
  const nLink1_15 = result[result.length -5].nLink;

  const nTitle1_16 = result[result.length -6].nTitle;
  const nDate1_16 = result[result.length -6].nDate;
  const nLink1_16 = result[result.length -6].nLink;

  const nTitle1_17 = result[result.length -7].nTitle;
  const nDate1_17 = result[result.length -7].nDate;
  const nLink1_17 = result[result.length -7].nLink;

  const nTitle1_18 = result[result.length -8].nTitle;
  const nDate1_18 = result[result.length -8].nDate;
  const nLink1_18 = result[result.length -8].nLink;

  const nTitle1_19 = result[result.length -9].nTitle;
  const nDate1_19 = result[result.length -9].nDate;
  const nLink1_19 = result[result.length -9].nLink;

  const nTitle1_20 = result[result.length -10].nTitle;
  const nDate1_20 = result[result.length -10].nDate;
  const nLink1_20 = result[result.length -10].nLink;

  
  return {
    lastUpdated: Date.now(),
    nTitle1_1, nDate1_1, nLink1_1,
    nTitle1_2, nDate1_2, nLink1_2,
    nTitle1_3, nDate1_3, nLink1_3,
    nTitle1_4, nDate1_4, nLink1_4,
    nTitle1_5, nDate1_5, nLink1_5,
    nTitle1_6, nDate1_6, nLink1_6,
    nTitle1_7, nDate1_7, nLink1_7,
    nTitle1_8, nDate1_8, nLink1_8,
    nTitle1_9, nDate1_9, nLink1_9,
    nTitle1_10, nDate1_10, nLink1_10,
    nTitle1_11, nDate1_11, nLink1_11,
    nTitle1_12, nDate1_12, nLink1_12,
    nTitle1_13, nDate1_13, nLink1_13,
    nTitle1_14, nDate1_14, nLink1_14,
    nTitle1_15, nDate1_15, nLink1_15,
    nTitle1_16, nDate1_16, nLink1_16,
    nTitle1_17, nDate1_17, nLink1_17,
    nTitle1_18, nDate1_18, nLink1_18,
    nTitle1_19, nDate1_19, nLink1_19,
    nTitle1_20, nDate1_20, nLink1_20,
  };
}

module.exports = { getLawmk };
