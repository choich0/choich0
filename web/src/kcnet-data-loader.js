const axios = require("axios");

async function getKcnet() {
  const apiClient = axios.create({
    baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
  });

  const response = await apiClient.get("kcnetTech");
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

  const nTitle1_11 = result[result.length -11].nTitle;
  const nDate1_11 = result[result.length -11].nDate;
  const nLink1_11 = result[result.length -11].nLink;

  const nTitle1_12 = result[result.length -12].nTitle;
  const nDate1_12 = result[result.length -12].nDate;
  const nLink1_12 = result[result.length -12].nLink;

  const nTitle1_13 = result[result.length -13].nTitle;
  const nDate1_13 = result[result.length -13].nDate;
  const nLink1_13 = result[result.length -13].nLink;

  const nTitle1_14 = result[result.length -14].nTitle;
  const nDate1_14 = result[result.length -14].nDate;
  const nLink1_14 = result[result.length -14].nLink;

  const nTitle1_15 = result[result.length -15].nTitle;
  const nDate1_15 = result[result.length -15].nDate;
  const nLink1_15 = result[result.length -15].nLink;

  const nTitle1_16 = result[result.length -16].nTitle;
  const nDate1_16 = result[result.length -16].nDate;
  const nLink1_16 = result[result.length -16].nLink;

  const nTitle1_17 = result[result.length -17].nTitle;
  const nDate1_17 = result[result.length -17].nDate;
  const nLink1_17 = result[result.length -17].nLink;

  const nTitle1_18 = result[result.length -18].nTitle;
  const nDate1_18 = result[result.length -18].nDate;
  const nLink1_18 = result[result.length -18].nLink;

  const nTitle1_19 = result[result.length -19].nTitle;
  const nDate1_19 = result[result.length -19].nDate;
  const nLink1_19 = result[result.length -19].nLink;

  const nTitle1_20 = result[result.length -20].nTitle;
  const nDate1_20 = result[result.length -20].nDate;
  const nLink1_20 = result[result.length -20].nLink;

  const apiClient2 = axios.create({
    baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
  });

  const response2 = await apiClient2.get("kcnetNot");
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

  const nTitle2_11 = result2[result2.length -11].nTitle;
  const nDate2_11 = result2[result2.length -11].nDate;
  const nLink2_11 = result2[result2.length -11].nLink;

  const nTitle2_12 = result2[result2.length -12].nTitle;
  const nDate2_12 = result2[result2.length -12].nDate;
  const nLink2_12 = result2[result2.length -12].nLink;

  const nTitle2_13 = result2[result2.length -13].nTitle;
  const nDate2_13 = result2[result2.length -13].nDate;
  const nLink2_13 = result2[result2.length -13].nLink;

  const nTitle2_14 = result2[result2.length -14].nTitle;
  const nDate2_14 = result2[result2.length -14].nDate;
  const nLink2_14 = result2[result2.length -14].nLink;

  const nTitle2_15 = result2[result2.length -15].nTitle;
  const nDate2_15 = result2[result2.length -15].nDate;
  const nLink2_15 = result2[result2.length -15].nLink;

  const nTitle2_16 = result2[result2.length -16].nTitle;
  const nDate2_16 = result2[result2.length -16].nDate;
  const nLink2_16 = result2[result2.length -16].nLink;

  const nTitle2_17 = result2[result2.length -17].nTitle;
  const nDate2_17 = result2[result2.length -17].nDate;
  const nLink2_17 = result2[result2.length -17].nLink;

  const nTitle2_18 = result2[result2.length -18].nTitle;
  const nDate2_18 = result2[result2.length -18].nDate;
  const nLink2_18 = result2[result2.length -18].nLink;

  const nTitle2_19 = result2[result2.length -19].nTitle;
  const nDate2_19 = result2[result2.length -19].nDate;
  const nLink2_19 = result2[result2.length -19].nLink;

  const nTitle2_20 = result2[result2.length -20].nTitle;
  const nDate2_20 = result2[result2.length -20].nDate;
  const nLink2_20 = result2[result2.length -20].nLink;

  const apiClient3 = axios.create({
    baseURL: process.env.CB_API_BASE_URL || "http://localhost:8080",
  });

  const response3 = await apiClient3.get("kcnetNews");
  const result3 = response3.data.result;

  const nTitle3_1 = result3[result3.length -1].nTitle;
  const nDate3_1 = result3[result3.length -1].nDate;
  const nLink3_1 = result3[result3.length -1].nLink;

  const nTitle3_2 = result3[result3.length -2].nTitle;
  const nDate3_2 = result3[result3.length -2].nDate;
  const nLink3_2 = result3[result3.length -2].nLink;

  const nTitle3_3 = result3[result3.length -3].nTitle;
  const nDate3_3 = result3[result3.length -3].nDate;
  const nLink3_3 = result3[result3.length -3].nLink;

  const nTitle3_4 = result3[result3.length -4].nTitle;
  const nDate3_4 = result3[result3.length -4].nDate;
  const nLink3_4 = result3[result3.length -4].nLink;

  const nTitle3_5 = result3[result3.length -5].nTitle;
  const nDate3_5 = result3[result3.length -5].nDate;
  const nLink3_5 = result3[result3.length -5].nLink;

  const nTitle3_6 = result3[result3.length -6].nTitle;
  const nDate3_6 = result3[result3.length -6].nDate;
  const nLink3_6 = result3[result3.length -6].nLink;

  const nTitle3_7 = result3[result3.length -7].nTitle;
  const nDate3_7 = result3[result3.length -7].nDate;
  const nLink3_7 = result3[result3.length -7].nLink;

  const nTitle3_8 = result3[result3.length -8].nTitle;
  const nDate3_8 = result3[result3.length -8].nDate;
  const nLink3_8 = result3[result3.length -8].nLink;

  const nTitle3_9 = result3[result3.length -9].nTitle;
  const nDate3_9 = result3[result3.length -9].nDate;
  const nLink3_9 = result3[result3.length -9].nLink;

  const nTitle3_10 = result3[result3.length -10].nTitle;
  const nDate3_10 = result3[result3.length -10].nDate;
  const nLink3_10 = result3[result3.length -10].nLink;

  const nTitle3_11 = result3[result3.length -11].nTitle;
  const nDate3_11 = result3[result3.length -11].nDate;
  const nLink3_11 = result3[result3.length -11].nLink;

  const nTitle3_12 = result3[result3.length -12].nTitle;
  const nDate3_12 = result3[result3.length -12].nDate;
  const nLink3_12 = result3[result3.length -12].nLink;

  const nTitle3_13 = result3[result3.length -13].nTitle;
  const nDate3_13 = result3[result3.length -13].nDate;
  const nLink3_13 = result3[result3.length -13].nLink;

  const nTitle3_14 = result3[result3.length -14].nTitle;
  const nDate3_14 = result3[result3.length -14].nDate;
  const nLink3_14 = result3[result3.length -14].nLink;

  const nTitle3_15 = result3[result3.length -15].nTitle;
  const nDate3_15 = result3[result3.length -15].nDate;
  const nLink3_15 = result3[result3.length -15].nLink;

  const nTitle3_16 = result3[result3.length -16].nTitle;
  const nDate3_16 = result3[result3.length -16].nDate;
  const nLink3_16 = result3[result3.length -16].nLink;

  const nTitle3_17 = result3[result3.length -17].nTitle;
  const nDate3_17 = result3[result3.length -17].nDate;
  const nLink3_17 = result3[result3.length -17].nLink;

  const nTitle3_18 = result3[result3.length -18].nTitle;
  const nDate3_18 = result3[result3.length -18].nDate;
  const nLink3_18 = result3[result3.length -18].nLink;

  const nTitle3_19 = result3[result3.length -19].nTitle;
  const nDate3_19 = result3[result3.length -19].nDate;
  const nLink3_19 = result3[result3.length -19].nLink;

  const nTitle3_20 = result3[result3.length -20].nTitle;
  const nDate3_20 = result3[result3.length -20].nDate;
  const nLink3_20 = result3[result3.length -20].nLink;
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
    nTitle2_11, nDate2_11, nLink2_11,
    nTitle2_12, nDate2_12, nLink2_12,
    nTitle2_13, nDate2_13, nLink2_13,
    nTitle2_14, nDate2_14, nLink2_14,
    nTitle2_15, nDate2_15, nLink2_15,
    nTitle2_16, nDate2_16, nLink2_16,
    nTitle2_17, nDate2_17, nLink2_17,
    nTitle2_18, nDate2_18, nLink2_18,
    nTitle2_19, nDate2_19, nLink2_19,
    nTitle2_20, nDate2_20, nLink2_20,
    nTitle3_1, nDate3_1, nLink3_1,
    nTitle3_2, nDate3_2, nLink3_2,
    nTitle3_3, nDate3_3, nLink3_3,
    nTitle3_4, nDate3_4, nLink3_4,
    nTitle3_5, nDate3_5, nLink3_5,
    nTitle3_6, nDate3_6, nLink3_6,
    nTitle3_7, nDate3_7, nLink3_7,
    nTitle3_8, nDate3_8, nLink3_8,
    nTitle3_9, nDate3_9, nLink3_9,
    nTitle3_10, nDate3_10, nLink3_10,
    nTitle3_11, nDate3_11, nLink3_11,
    nTitle3_12, nDate3_12, nLink3_12,
    nTitle3_13, nDate3_13, nLink3_13,
    nTitle3_14, nDate3_14, nLink3_14,
    nTitle3_15, nDate3_15, nLink3_15,
    nTitle3_16, nDate3_16, nLink3_16,
    nTitle3_17, nDate3_17, nLink3_17,
    nTitle3_18, nDate3_18, nLink3_18,
    nTitle3_19, nDate3_19, nLink3_19,
    nTitle3_20, nDate3_20, nLink3_20,
  };
}

module.exports = { getKcnet };
