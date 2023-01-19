const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getInsaEdu = async () => {
    try {
        const insaEduHtml = (
            await axios.get("http://www.insabank.com/in/receipt", {responseType: "arraybuffer"})
        );
        return insaEduHtml;
    } catch (e) {
        console.log(e);
    }
};

const InsaEduCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const insaEduHtml = await getInsaEdu();
    const content = iconv.decode(insaEduHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 0; i < 10; i++) {
        const list_text_inner_arr = $(
            `#in_content > div.xe-widget-wrapper > div > div > table > tbody > tr.fiked${i}`
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".title"); 
            const path = title.find("a").first().attr("href");
            const date = $(td).find("td:nth-child(3)");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim(),
                nLink: `http://www.insabank.com${path}`
            });
        });
    };
    return news;
}

const getInsaHr = async () => {
    try {
        const insaHrHtml = (
            await axios.get("http://www.insabank.com/in/news", {responseType: "arraybuffer"})
        );
        return insaHrHtml;
    } catch (e) {
        console.log(e);
    }
};

const InsaHrCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const insaHrHtml = await getInsaHr();
    const content = iconv.decode(insaHrHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            `#bd_2249_0 > div > table > tbody > tr:nth-child(${i})`
        ).toArray();
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".title"); 
            const path = title.find("a").first().attr("href");
            const date = $(td).find("td:nth-child(5)");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim(),
                nLink: `http://www.insabank.com${path}`
            });
        });
    };
    return news;
}

module.exports = { InsaEduCrawling, InsaHrCrawling };