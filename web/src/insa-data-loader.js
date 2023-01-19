const axios = require("axios");

async function getInsa() {
  const apiClient = axios.create({
    baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
  });

  const response = await apiClient.get("insaEdu");
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

  const apiClient2 = axios.create({
    baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
  });

  const response2 = await apiClient2.get("insaHr");
  const result2 = response2.data.result;

  const nTitle2_1 = result2[result2.length -1].nTitle;
  const nDate2_1 = result2[result2.length -1].nDate;
  const nLink2_1 = result2[result2.length -1].nLink;

  const nTitle2_2 = result2[result2.length -2].nTitle;
  const nDate2_2 = result2[result2.length -2].nDate;
  const nLink2_2 = result2[result2.length -2].nLink;

  const nTitle2_3 = result2[result2.length -3].nTitle;
  const nDate2_3 = result2[result2.length -3].nDate;
  const nLink2_3 = result2[result2.length -3].nLink;

  const nTitle2_4 = result2[result2.length -4].nTitle;
  const nDate2_4 = result2[result2.length -4].nDate;
  const nLink2_4 = result2[result2.length -4].nLink;

  const nTitle2_5 = result2[result2.length -5].nTitle;
  const nDate2_5 = result2[result2.length -5].nDate;
  const nLink2_5 = result2[result2.length -5].nLink;

  const nTitle2_6 = result2[result2.length -6].nTitle;
  const nDate2_6 = result2[result2.length -6].nDate;
  const nLink2_6 = result2[result2.length -6].nLink;

  const nTitle2_7 = result2[result2.length -7].nTitle;
  const nDate2_7 = result2[result2.length -7].nDate;
  const nLink2_7 = result2[result2.length -7].nLink;

  const nTitle2_8 = result2[result2.length -8].nTitle;
  const nDate2_8 = result2[result2.length -8].nDate;
  const nLink2_8 = result2[result2.length -8].nLink;

  const nTitle2_9 = result2[result2.length -9].nTitle;
  const nDate2_9 = result2[result2.length -9].nDate;
  const nLink2_9 = result2[result2.length -9].nLink;

  const nTitle2_10 = result2[result2.length -10].nTitle;
  const nDate2_10 = result2[result2.length -10].nDate;
  const nLink2_10 = result2[result2.length -10].nLink;

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
    nTitle2_1, nDate2_1, nLink2_1,
    nTitle2_2, nDate2_2, nLink2_2,
    nTitle2_3, nDate2_3, nLink2_3,
    nTitle2_4, nDate2_4, nLink2_4,
    nTitle2_5, nDate2_5, nLink2_5,
    nTitle2_6, nDate2_6, nLink2_6,
    nTitle2_7, nDate2_7, nLink2_7,
    nTitle2_8, nDate2_8, nLink2_8,
    nTitle2_9, nDate2_9, nLink2_9,
    nTitle2_10, nDate2_10, nLink2_10,
  };
}

module.exports = { getInsa };
