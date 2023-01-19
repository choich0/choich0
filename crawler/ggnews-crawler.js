const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');    

const GgnewsExtCrawling = async () => {
	// headless로 크롬 드라이버 실행
    let driver = await new Builder()
    .forBrowser('chrome')    
    .setChromeOptions(new chrome.Options().headless().addArguments("--disable-gpu", "window-size=1920x1080",
    "lang=ko_KR"))
    .build();

    try {
        const url = "https://www.google.com/search?q="
        const keyword = "연구소+증축%7C공장+증축%7C생산시설+증축%7C생산시설+증설%7C공장+증설%7C생산+증설%7C반도체+증축%7C반도체+증설%7C증축%7C증설"
        const newsTab = "&tbm=nws"
        // 특정 URL 생성
        await driver.get(url + keyword + newsTab);

        await driver.wait(until.elementLocated(By.id('rso')), 10000);
        const title = await driver.findElements(By.className("mCBkyc ynAwRc MBeuO nDgy9d"));
        const path = await driver.findElements(By.className("WlydOe"));
        const date =  await driver.findElements(By.className("OSrXXb ZE0LJd YsWzw"));
        
        let news = [];
        for (var i = 0; i < 10; i++) {
            news.push({
                nTitle: await title[i].getText(),
                nDate: await date[i].getText(),
                nLink: await path[i].getAttribute('href'),
            });
        }
        return news;
    }
    catch(e){
        console.log(e);
    }
    finally {
        driver.quit();
    }
}

const GgnewsFacCrawling = async () => {
	// headless로 크롬 드라이버 실행
    let driver = await new Builder()
    .forBrowser('chrome')    
    .setChromeOptions(new chrome.Options().headless().addArguments("--disable-gpu", "window-size=1920x1080",
    "lang=ko_KR"))
    .build();

    try {
        const url = "https://www.google.com/search?q="
        const keyword = "연구소%7C공장%7C생산시설%7C데이터센터%7CR%26D센터%7CIDC%7C제약%7CGMP%7C바이오"
        const newsTab = "&tbm=nws"
        // 특정 URL 생성
        await driver.get(url + keyword + newsTab);

        await driver.wait(until.elementLocated(By.id('rso')), 10000);
        const title = await driver.findElements(By.className("mCBkyc ynAwRc MBeuO nDgy9d"));
        const path = await driver.findElements(By.className("WlydOe"));
        const date =  await driver.findElements(By.className("OSrXXb ZE0LJd YsWzw"));
        
        let news = [];
        for (var i = 0; i < 10; i++) {
            news.push({
                nTitle: await title[i].getText(),
                nDate: await date[i].getText(),
                nLink: await path[i].getAttribute('href'),
            });
        }
        return news;
    }
    catch(e){
        console.log(e);
    }
    finally {
        driver.quit();
    }
}

const GgnewsSemCrawling = async () => {
	// headless로 크롬 드라이버 실행
    let driver = await new Builder()
    .forBrowser('chrome')    
    .setChromeOptions(new chrome.Options().headless().addArguments("--disable-gpu", "window-size=1920x1080",
    "lang=ko_KR"))
    .build();

    try {
        const url = "https://www.google.com/search?q="
        const keyword = "반도체|하이닉스|삼성전자"
        const newsTab = "&tbm=nws"
        // 특정 URL 생성
        await driver.get(url + keyword + newsTab);

        await driver.wait(until.elementLocated(By.id('rso')), 10000);
        const title = await driver.findElements(By.className("mCBkyc ynAwRc MBeuO nDgy9d"));
        const path = await driver.findElements(By.className("WlydOe"));
        const date =  await driver.findElements(By.className("OSrXXb ZE0LJd YsWzw"));
        
        let news = [];
        for (var i = 0; i < 10; i++) {
            news.push({
                nTitle: await title[i].getText(),
                nDate: await date[i].getText(),
                nLink: await path[i].getAttribute('href'),
            });
        }
        return news;
    }
    catch(e){
        console.log(e);
    }
    finally {
        driver.quit();
    }
}

module.exports = { GgnewsExtCrawling, GgnewsFacCrawling, GgnewsSemCrawling };