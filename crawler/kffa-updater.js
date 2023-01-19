const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { KffaAnnCrawling, KffaNotCrawling, KffaRawCrawling } = require("./kffa-crawler");

async function kffaAnnUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "kffaAnn.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous kffaAnn not found");
  }

  const newsCralwer = await KffaAnnCrawling();

  const newData = {
    newsList1: newsCralwer[9],
    newsList2: newsCralwer[8],
    newsList3: newsCralwer[7],
    newsList4: newsCralwer[6],
    newsList5: newsCralwer[5],
    newsList6: newsCralwer[4],
    newsList7: newsCralwer[3],
    newsList8: newsCralwer[2],
    newsList9: newsCralwer[1],
    newsList10: newsCralwer[0],
  };

  // 변경된 값이 없으면 아무 것도 하지 않음
  if (_.isEqual(newData, prevData)) {
    console.log("kffaAnn has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateKffaAnn({
    nTitle,
    nDate,
    nLink,
  });

  console.log("kffaAnn updated successfully");
}

async function kffaNotUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "kffaNot.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous kffaNot not found");
  }

  const newsCralwer = await KffaNotCrawling();

  const newData = {
    newsList1: newsCralwer[9],
    newsList2: newsCralwer[8],
    newsList3: newsCralwer[7],
    newsList4: newsCralwer[6],
    newsList5: newsCralwer[5],
    newsList6: newsCralwer[4],
    newsList7: newsCralwer[3],
    newsList8: newsCralwer[2],
    newsList9: newsCralwer[1],
    newsList10: newsCralwer[0],
  };

  // 변경된 값이 없으면 아무 것도 하지 않음
  if (_.isEqual(newData, prevData)) {
    console.log("kffaNot has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateKffaNot({
    nTitle,
    nDate,
    nLink,
  });

  console.log("kffaNot updated successfully");
}

async function kffaRawUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "kffaRaw.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous kffaRaw not found");
  }

  const newsCralwer = await KffaRawCrawling();

  const newData = {
    newsList1: newsCralwer[9],
    newsList2: newsCralwer[8],
    newsList3: newsCralwer[7],
    newsList4: newsCralwer[6],
    newsList5: newsCralwer[5],
    newsList6: newsCralwer[4],
    newsList7: newsCralwer[3],
    newsList8: newsCralwer[2],
    newsList9: newsCralwer[1],
    newsList10: newsCralwer[0],
  };

  // 변경된 값이 없으면 아무 것도 하지 않음
  if (_.isEqual(newData, prevData)) {
    console.log("kffaRaw has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateKffaRaw({
    nTitle,
    nDate,
    nLink,
  });

  console.log("kffaRaw updated successfully");
}

module.exports = { kffaAnnUpdate, kffaNotUpdate, kffaRawUpdate };
