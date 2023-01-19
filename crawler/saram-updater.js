const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { SaramPlanCrawling, SaramEvalCrawling, SaramGroupCrawling, SaramPolCrawling, SaramTrendCrawling } = require("./saram-crawler");

async function saramPlanUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "saramPlan.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous saramPlan not found");
  }

  const newsCralwer = await SaramPlanCrawling();

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
    console.log("saramPlan has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateSaramPlan({
    nTitle,
    nDate,
    nLink,
  });

  console.log('saramPlan updated successfully')
}

async function saramEvalUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "saramEval.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous saramEval not found");
  }

  const newsCralwer = await SaramEvalCrawling();

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
    console.log("saramEval has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateSaramEval({
    nTitle,
    nDate,
    nLink,
  });

  console.log('saramEval updated successfully')
}

async function saramGroupUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "saramGroup.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous saramGroup not found");
  }

  const newsCralwer = await SaramGroupCrawling();

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
    console.log("saramGroup has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateSaramGroup({
    nTitle,
    nDate,
    nLink,
  });

  console.log('saramGroup updated successfully')
}

async function saramPolUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "saramPol.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous saramPol not found");
  }

  const newsCralwer = await SaramPolCrawling();

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
    console.log("saramPol has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateSaramPol({
    nTitle,
    nDate,
    nLink,
  });

  console.log('saramPol updated successfully')
}

async function saramTrendUpdate(outputPath, apiClient) {
    let prevData = {};
    const newsListPath = path.join(outputPath, "saramTrend.json");
    try {
      // 기존 크롤링한 값이 있다면 불러오기
      prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
    } catch (e) {
      console.log("previous saramTrend not found");
    }
  
    const newsCralwer = await SaramTrendCrawling();
  
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
      console.log("saramTrend has not been changed");
      return;
    }
  
    // 크롤링 된 최신 값을 파일에 저장해 둠
    fs.writeFileSync(newsListPath, JSON.stringify(newData));
  
    var newNewsList = newData.newsList1;
    var { nTitle, nDate, nLink } = newNewsList;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList2 = newData.newsList2;
    var { nTitle, nDate, nLink } = newNewsList2;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList3 = newData.newsList3;
    var { nTitle, nDate, nLink } = newNewsList3;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList4 = newData.newsList4;
    var { nTitle, nDate, nLink } = newNewsList4;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList5 = newData.newsList5;
    var { nTitle, nDate, nLink } = newNewsList5;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList6 = newData.newsList6;
    var { nTitle, nDate, nLink } = newNewsList6;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList7 = newData.newsList7;
    var { nTitle, nDate, nLink } = newNewsList7;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList8 = newData.newsList8;
    var { nTitle, nDate, nLink } = newNewsList8;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList9 = newData.newsList9;
    var { nTitle, nDate, nLink } = newNewsList9;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList10 = newData.newsList10;
    var { nTitle, nDate, nLink } = newNewsList10;
  
    await apiClient.updateSaramTrend({
      nTitle,
      nDate,
      nLink,
    });
  
    console.log('saramTrend updated successfully')
  }

module.exports = { saramPlanUpdate, saramEvalUpdate, saramGroupUpdate, saramPolUpdate, saramTrendUpdate };
