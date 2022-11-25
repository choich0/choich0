const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { DnewsSteCrawling, DnewsEngCrawling, DnewsTechCrawling, DnewsMatCrawling, DnewsSafetyCrawling } = require("./dnews-crawler");

async function dnewsStdUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "dnewsStd.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous dnewsStd not found");
  }

  const newsCralwer = await DnewsSteCrawling();

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
    console.log("dnewsStd has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateDnewsStd({
    nTitle,
    nDate,
    nLink,
  });

  console.log('dnewsStd updated successfully')
}

async function dnewsEngUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "dnewsEng.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous dnewsEng not found");
  }

  const newsCralwer = await DnewsEngCrawling();

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
    console.log("dnewsEng has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateDnewsEng({
    nTitle,
    nDate,
    nLink,
  });

  console.log('dnewsEng updated successfully')
}

async function dnewsTechUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "dnewsTech.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous dnewsTech not found");
  }

  const newsCralwer = await DnewsTechCrawling();

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
    console.log("dnewsTech has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateDnewsTech({
    nTitle,
    nDate,
    nLink,
  });

  console.log('dnewsTech updated successfully')
}

async function dnewsMatUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "dnewsMat.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous dnewsMat not found");
  }

  const newsCralwer = await DnewsMatCrawling();

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
    console.log("dnewsMat has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateDnewsMat({
    nTitle,
    nDate,
    nLink,
  });

  console.log('dnewsMat updated successfully')
}

async function dnewsSafetyUpdate(outputPath, apiClient) {
    let prevData = {};
    const newsListPath = path.join(outputPath, "dnewsSafety.json");
    try {
      // 기존 크롤링한 값이 있다면 불러오기
      prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
    } catch (e) {
      console.log("previous dnewsSafety not found");
    }
  
    const newsCralwer = await DnewsSafetyCrawling();
  
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
      console.log("dnewsSafety has not been changed");
      return;
    }
  
    // 크롤링 된 최신 값을 파일에 저장해 둠
    fs.writeFileSync(newsListPath, JSON.stringify(newData));
  
    var newNewsList = newData.newsList1;
    var { nTitle, nDate, nLink } = newNewsList;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList2 = newData.newsList2;
    var { nTitle, nDate, nLink } = newNewsList2;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList3 = newData.newsList3;
    var { nTitle, nDate, nLink } = newNewsList3;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList4 = newData.newsList4;
    var { nTitle, nDate, nLink } = newNewsList4;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList5 = newData.newsList5;
    var { nTitle, nDate, nLink } = newNewsList5;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList6 = newData.newsList6;
    var { nTitle, nDate, nLink } = newNewsList6;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList7 = newData.newsList7;
    var { nTitle, nDate, nLink } = newNewsList7;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList8 = newData.newsList8;
    var { nTitle, nDate, nLink } = newNewsList8;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList9 = newData.newsList9;
    var { nTitle, nDate, nLink } = newNewsList9;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList10 = newData.newsList10;
    var { nTitle, nDate, nLink } = newNewsList10;
  
    await apiClient.updateDnewsSafety({
      nTitle,
      nDate,
      nLink,
    });
  
    console.log('dnewsSafety updated successfully')
  }

module.exports = { dnewsStdUpdate, dnewsEngUpdate, dnewsTechUpdate, dnewsMatUpdate, dnewsSafetyUpdate };
