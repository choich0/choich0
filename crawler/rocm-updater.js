const _ = require("lodash");
const fs = require("fs");
const path = require("path");
const { SRocmCrawling, WRocmCrawling, DRocmCrawling, BRocmCrawling, IRocmCrawling } = require("./rocm-crawler");

async function sRocmUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "sRocm.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous sRocm not found");
  }

  const newsCralwer = await SRocmCrawling();

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
    console.log("sRocm has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateSRocm({
    nTitle,
    nDate,
    nLink,
  });

  console.log('sRocm updated successfully')
}

async function wRocmUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "wRocm.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous wRocm not found");
  }

  const newsCralwer = await WRocmCrawling();

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
    console.log("wRocm has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateWRocm({
    nTitle,
    nDate,
    nLink,
  });

  console.log('wRocm updated successfully')
}

async function dRocmUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "dRocm.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous dRocm not found");
  }

  const newsCralwer = await DRocmCrawling();

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
    console.log("dRocm has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateDRocm({
    nTitle,
    nDate,
    nLink,
  });

  console.log('dRocm updated successfully')
}

async function bRocmUpdate(outputPath, apiClient) {
  let prevData = {};
  const newsListPath = path.join(outputPath, "bRocm.json");
  try {
    // 기존 크롤링한 값이 있다면 불러오기
    prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
  } catch (e) {
    console.log("previous bRocm not found");
  }

  const newsCralwer = await BRocmCrawling();

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
    console.log("bRocm has not been changed");
    return;
  }

  // 크롤링 된 최신 값을 파일에 저장해 둠
  fs.writeFileSync(newsListPath, JSON.stringify(newData));

  var newNewsList = newData.newsList1;
  var { nTitle, nDate, nLink } = newNewsList;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList2 = newData.newsList2;
  var { nTitle, nDate, nLink } = newNewsList2;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList3 = newData.newsList3;
  var { nTitle, nDate, nLink } = newNewsList3;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList4 = newData.newsList4;
  var { nTitle, nDate, nLink } = newNewsList4;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList5 = newData.newsList5;
  var { nTitle, nDate, nLink } = newNewsList5;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList6 = newData.newsList6;
  var { nTitle, nDate, nLink } = newNewsList6;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList7 = newData.newsList7;
  var { nTitle, nDate, nLink } = newNewsList7;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList8 = newData.newsList8;
  var { nTitle, nDate, nLink } = newNewsList8;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList9 = newData.newsList9;
  var { nTitle, nDate, nLink } = newNewsList9;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  var newNewsList10 = newData.newsList10;
  var { nTitle, nDate, nLink } = newNewsList10;

  await apiClient.updateBRocm({
    nTitle,
    nDate,
    nLink,
  });

  console.log('bRocm updated successfully')
}

async function iRocmUpdate(outputPath, apiClient) {
    let prevData = {};
    const newsListPath = path.join(outputPath, "iRocm.json");
    try {
      // 기존 크롤링한 값이 있다면 불러오기
      prevData = JSON.parse(fs.readFileSync(newsListPath, "utf-8"));
    } catch (e) {
      console.log("previous iRocm not found");
    }
  
    const newsCralwer = await IRocmCrawling();
  
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
      console.log("iRocm has not been changed");
      return;
    }
  
    // 크롤링 된 최신 값을 파일에 저장해 둠
    fs.writeFileSync(newsListPath, JSON.stringify(newData));
  
    var newNewsList = newData.newsList1;
    var { nTitle, nDate, nLink } = newNewsList;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList2 = newData.newsList2;
    var { nTitle, nDate, nLink } = newNewsList2;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList3 = newData.newsList3;
    var { nTitle, nDate, nLink } = newNewsList3;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList4 = newData.newsList4;
    var { nTitle, nDate, nLink } = newNewsList4;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList5 = newData.newsList5;
    var { nTitle, nDate, nLink } = newNewsList5;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList6 = newData.newsList6;
    var { nTitle, nDate, nLink } = newNewsList6;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList7 = newData.newsList7;
    var { nTitle, nDate, nLink } = newNewsList7;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList8 = newData.newsList8;
    var { nTitle, nDate, nLink } = newNewsList8;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList9 = newData.newsList9;
    var { nTitle, nDate, nLink } = newNewsList9;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    var newNewsList10 = newData.newsList10;
    var { nTitle, nDate, nLink } = newNewsList10;
  
    await apiClient.updateIRocm({
      nTitle,
      nDate,
      nLink,
    });
  
    console.log('iRocm updated successfully')
  }

module.exports = { sRocmUpdate, wRocmUpdate, dRocmUpdate, bRocmUpdate, iRocmUpdate };
