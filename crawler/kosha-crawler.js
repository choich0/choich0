const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getKoshaNews = async () => {
    try {
        const koshaNewsHtml = (
            await axios.get("https://www.kosha.or.kr/kosha/report/kosha_news.do", {responseType: "arraybuffer"})
        );
        return koshaNewsHtml;
    } catch (e) {
        console.log(e);
    }
};

const KoshaNewsCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const koshaNewsHtml = await getKoshaNews();
    const content = iconv.decode(koshaNewsHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 2; i < 12; i++) {
        const list_text_inner_arr = $(
            "#jwxe_main_content > div.ko.board.list > div > div.Board_list.table-scroll-box > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find(".board-list-title"); 
            const path = $(tr).find("a").first().attr("href");
            const dateStr = $(tr).find(".board-list-date");
            const date = dateStr.text().replace(/[^0-9, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.kosha.or.kr/kosha/report/kosha_news.do${path}`
            });
        });
    };
    return news;
}

const getKoshaCon = async () => {
    try {
        const koshaConHtml = (
            await axios.get("https://www.kosha.or.kr/kosha/data/construction.do#/a", {responseType: "arraybuffer"})
        );
        return koshaConHtml;
    } catch (e) {
        console.log(e);
    }
};

const KoshaConCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const koshaConHtml = await getKoshaCon();
    const content = iconv.decode(koshaConHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#jwxe_main_content > div.ko.board.list > div > div.Board_list.table-scroll-box > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find(".board-list-title"); 
            const path = $(tr).find("a").first().attr("href");
            const dateStr = $(tr).find("td:nth-child(3)");
            const date = dateStr.text().replace(/[^0-9, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.kosha.or.kr/kosha/report/kosha_news.do${path}`
            });
        });
    };
    return news;
}

const getKoshaGov = async () => {
    try {
        const koshaGovHtml = (
            await axios.get("https://www.kosha.or.kr/kosha/data/government_office.do", {responseType: "arraybuffer"})
        );
        return koshaGovHtml;
    } catch (e) {
        console.log(e);
    }
};

const KoshaGovCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const koshaGovHtml = await getKoshaGov();
    const content = iconv.decode(koshaGovHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#jwxe_main_content > div.ko.board.list > div > div.Board_list.table-scroll-box > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find(".board-list-title"); 
            const path = $(tr).find("a").first().attr("href");
            const dateStr = $(tr).find("td:nth-child(3)");
            const date = dateStr.text().replace(/[^0-9, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.kosha.or.kr/kosha/report/kosha_news.do${path}`
            });
        });
    };
    return news;
}

module.exports = { KoshaNewsCrawling, KoshaConCrawling, KoshaGovCrawling };