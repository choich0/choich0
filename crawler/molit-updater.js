const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { MolitCityCrawling, MolitLandCrawling, MolitConCrawling, MolitGenCrawling } = require("./molit-crawler");

async function molitCityUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "molitCity.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous molitCity not found");
  }

  const newsCralwer = await MolitCityCrawling();

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
    console.log("molitCity has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updatemolitCity({
    nTitle,
    nDate,
    nLink,
  });

  console.log('molitCity updated successfully')
}

async function molitLandUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "molitLand.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous molitLand not found");
  }

  const newsCralwer = await MolitLandCrawling();

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
    console.log("molitLand has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updatemolitLand({
    nTitle,
    nDate,
    nLink,
  });

  console.log('molitLand updated successfully')
}

async function molitConUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "molitCon.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous molitCon not found");
  }

  const newsCralwer = await MolitConCrawling();

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
    console.log("molitCon has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updatemolitCon({
    nTitle,
    nDate,
    nLink,
  });

  console.log('molitCon updated successfully')
}

async function molitGenUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "molitGen.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous molitGen not found");
  }

  const newsCralwer = await MolitGenCrawling();

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
    console.log("molitGen has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updatemolitGen({
    nTitle,
    nDate,
    nLink,
  });

  console.log('molitGen updated successfully')
}

module.exports = { molitCityUpdate, molitLandUpdate, molitConUpdate, molitGenUpdate };
