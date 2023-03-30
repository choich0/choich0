const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { KcnetTechCrawling, KcnetNotCrawling, KcnetNewsCrawling } = require("./kcnet-crawler");

async function kcnetTechUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "kcnetTech.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous kcnetTech not found");
  }

  const newsCralwer = await KcnetTechCrawling();

  const newData = {
    newsList1: newsCralwer[19],
    newsList2: newsCralwer[18],
    newsList3: newsCralwer[17],
    newsList4: newsCralwer[16],
    newsList5: newsCralwer[15],
    newsList6: newsCralwer[14],
    newsList7: newsCralwer[13],
    newsList8: newsCralwer[12],
    newsList9: newsCralwer[11],
    newsList10: newsCralwer[10],
    newsList11: newsCralwer[9],
    newsList12: newsCralwer[8],
    newsList13: newsCralwer[7],
    newsList14: newsCralwer[6],
    newsList15: newsCralwer[5],
    newsList16: newsCralwer[4],
    newsList17: newsCralwer[3],
    newsList18: newsCralwer[2],
    newsList19: newsCralwer[1],
    newsList20: newsCralwer[0],
  };

  // 변경된 값이 없으면 아무 것도 하지 않음
  if (_.isEqual(newData, prevData)) {
    console.log("kcnetTech has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList11 = newData.newsList11;
  var { nTitle, nDate, nLink } = newNewsList11;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList12 = newData.newsList12;
  var { nTitle, nDate, nLink } = newNewsList12;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList13 = newData.newsList13;
  var { nTitle, nDate, nLink } = newNewsList13;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList14 = newData.newsList14;
  var { nTitle, nDate, nLink } = newNewsList14;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList15 = newData.newsList15;
  var { nTitle, nDate, nLink } = newNewsList15;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList16 = newData.newsList16;
  var { nTitle, nDate, nLink } = newNewsList16;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList17 = newData.newsList17;
  var { nTitle, nDate, nLink } = newNewsList17;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList18 = newData.newsList18;
  var { nTitle, nDate, nLink } = newNewsList18;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList19 = newData.newsList19;
  var { nTitle, nDate, nLink } = newNewsList19;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList20 = newData.newsList20;
  var { nTitle, nDate, nLink } = newNewsList20;

  await apiClient.updateKcnetTech({
    nTitle,
    nDate,
    nLink,
  });

  console.log("kcnetTech updated successfully");
}

async function kcnetNotUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "kcnetNot.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous kcnetNot not found");
  }

  const newsCralwer = await KcnetNotCrawling();

  const newData = {
    newsList1: newsCralwer[19],
    newsList2: newsCralwer[18],
    newsList3: newsCralwer[17],
    newsList4: newsCralwer[16],
    newsList5: newsCralwer[15],
    newsList6: newsCralwer[14],
    newsList7: newsCralwer[13],
    newsList8: newsCralwer[12],
    newsList9: newsCralwer[11],
    newsList10: newsCralwer[10],
    newsList11: newsCralwer[9],
    newsList12: newsCralwer[8],
    newsList13: newsCralwer[7],
    newsList14: newsCralwer[6],
    newsList15: newsCralwer[5],
    newsList16: newsCralwer[4],
    newsList17: newsCralwer[3],
    newsList18: newsCralwer[2],
    newsList19: newsCralwer[1],
    newsList20: newsCralwer[0],
  };

  // 변경된 값이 없으면 아무 것도 하지 않음
  if (_.isEqual(newData, prevData)) {
    console.log("kcnetNot has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList11 = newData.newsList11;
  var { nTitle, nDate, nLink } = newNewsList11;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList12 = newData.newsList12;
  var { nTitle, nDate, nLink } = newNewsList12;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList13 = newData.newsList13;
  var { nTitle, nDate, nLink } = newNewsList13;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList14 = newData.newsList14;
  var { nTitle, nDate, nLink } = newNewsList14;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList15 = newData.newsList15;
  var { nTitle, nDate, nLink } = newNewsList15;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList16 = newData.newsList16;
  var { nTitle, nDate, nLink } = newNewsList16;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList17 = newData.newsList17;
  var { nTitle, nDate, nLink } = newNewsList17;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList18 = newData.newsList18;
  var { nTitle, nDate, nLink } = newNewsList18;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList19 = newData.newsList19;
  var { nTitle, nDate, nLink } = newNewsList19;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList20 = newData.newsList20;
  var { nTitle, nDate, nLink } = newNewsList20;

  await apiClient.updateKcnetNot({
    nTitle,
    nDate,
    nLink,
  });

  console.log("kcnetNot updated successfully");
}

async function kcnetNewsUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "kcnetNews.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous kcnetNews not found");
  }

  const newsCralwer = await KcnetNewsCrawling();

  const newData = {
    newsList1: newsCralwer[19],
    newsList2: newsCralwer[18],
    newsList3: newsCralwer[17],
    newsList4: newsCralwer[16],
    newsList5: newsCralwer[15],
    newsList6: newsCralwer[14],
    newsList7: newsCralwer[13],
    newsList8: newsCralwer[12],
    newsList9: newsCralwer[11],
    newsList10: newsCralwer[10],
    newsList11: newsCralwer[9],
    newsList12: newsCralwer[8],
    newsList13: newsCralwer[7],
    newsList14: newsCralwer[6],
    newsList15: newsCralwer[5],
    newsList16: newsCralwer[4],
    newsList17: newsCralwer[3],
    newsList18: newsCralwer[2],
    newsList19: newsCralwer[1],
    newsList20: newsCralwer[0],
  };

  // 변경된 값이 없으면 아무 것도 하지 않음
  if (_.isEqual(newData, prevData)) {
    console.log("kcnetNews has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList11 = newData.newsList11;
  var { nTitle, nDate, nLink } = newNewsList11;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList12 = newData.newsList12;
  var { nTitle, nDate, nLink } = newNewsList12;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList13 = newData.newsList13;
  var { nTitle, nDate, nLink } = newNewsList13;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList14 = newData.newsList14;
  var { nTitle, nDate, nLink } = newNewsList14;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList15 = newData.newsList15;
  var { nTitle, nDate, nLink } = newNewsList15;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList16 = newData.newsList16;
  var { nTitle, nDate, nLink } = newNewsList16;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList17 = newData.newsList17;
  var { nTitle, nDate, nLink } = newNewsList17;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList18 = newData.newsList18;
  var { nTitle, nDate, nLink } = newNewsList18;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList19 = newData.newsList19;
  var { nTitle, nDate, nLink } = newNewsList19;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList20 = newData.newsList20;
  var { nTitle, nDate, nLink } = newNewsList20;

  await apiClient.updateKcnetNews({
    nTitle,
    nDate,
    nLink,
  });

  console.log("kcnetNews updated successfully");
}

module.exports = { kcnetTechUpdate, kcnetNotUpdate, kcnetNewsUpdate };
