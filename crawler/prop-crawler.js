const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');
const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const PropMkCrawling = async () => {
	// headless로 크롬 드라이버 실행
    let driver = await new Builder()
    .forBrowser('chrome')    
    .setChromeOptions(new chrome.Options().headless().addArguments("--disable-gpu", "window-size=1920x1080",
    "lang=ko_KR"))
    .build();

    try {
        await driver.get("https://www.mk.co.kr/news/realestate/");

        await driver.wait(until.elementLocated(By.id("list_area")), 10000);
        const title = await driver.findElements(By.className("news_ttl"));
        const path = await driver.findElements(By.className("news_item"));
        const date =  await driver.findElements(By.className("time_info"));
        
        let news = [];
        for (var i = 1; i < 11; i++) {
            news.push({
                nTitle: await title[i].getText(),
                nDate: await (await date[i].getText()).slice(0, 10),
                nLink: await path[i].getAttribute("href"),
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

const PropFnCrawling = async () => {
	// headless로 크롬 드라이버 실행
    let driver = await new Builder()
    .forBrowser('chrome')    
    .setChromeOptions(new chrome.Options().headless().addArguments("--disable-gpu", "window-size=1920x1080",
    "lang=ko_KR"))
    .build();

    try {
        await driver.get("https://www.fnnews.com/section/002003000");

        await driver.wait(until.elementLocated(By.id("secNo1")), 10000);
        const title = await driver.findElements(By.className("tit_thumb"));
        const path = await driver.findElements(By.css("#secNo1 > li > a:nth-child(1)"));
        const date =  await driver.findElements(By.className("date"));
        
        let news = [];
        for (var i = 0; i < 10; i++) {
            news.push({
                nTitle: await title[i].getText(),
                nDate: await (await date[i].getText()).slice(0, 10),
                nLink: await path[i].getAttribute("href"),
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

const getPropKld = async () => {
    try {
        const propKldHtml = (
            await axios.get("http://www.ikld.kr/news/articleList.html?sc_sub_section_code=S2N3&view_type=sm", {responseType: "arraybuffer"})
        );
        return propKldHtml;
    } catch (e) {
        console.log(e);
    }
};

const PropKldCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const propKldHtml = await getPropKld();
    const content = iconv.decode(propKldHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#user-container > div.float-center.max-width-1140 > div.user-content > section > article > div.article-list > section > div:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((div) => {
            const title = $(div).find("a").first(); // 첫번째 <a> 태그
            const path = title.attr("href"); // 첫번째 <a> 태그 url
            const dateStr = $(div).find(".list-dated");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ikld.kr/${path}`
            });
        });
    };
    return news;
}

const getPropDnews = async () => {
    try {
        const propDnewsHtml = (
            await axios.get("https://m.dnews.co.kr/m_home/dnews_section_S1N1.html", {responseType: "arraybuffer"})
        );
        return propDnewsHtml;
    } catch (e) {
        console.log(e);
    }
};

const PropDnewsCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const propDnewsHtml = await getPropDnews();
    const content = iconv.decode(propDnewsHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#container > div > div.baseBox3 > div > ul:nth-child(1) > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".tit"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".date");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://m.dnews.co.kr/${path}`
            });
        });
    };
    return news;
}


module.exports = { PropMkCrawling, PropFnCrawling, PropKldCrawling, PropDnewsCrawling };