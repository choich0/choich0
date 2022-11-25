const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getKldCon = async () => {
    try {
        const kldConHtml = (
            await axios.get("http://www.ikld.kr/news/articleList.html?sc_sub_section_code=S2N1&view_type=sm", {responseType: "arraybuffer"})
        );
        return kldConHtml;
    } catch (e) {
        console.log(e);
    }
};

const KldConCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldConHtml = await getKldCon();
    const content = iconv.decode(kldConHtml.data, "utf-8").toString() //한글 인코딩
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
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ikld.kr/${path}`
            });
        });
    };
    return news;
}

const getKldCm = async () => {
    try {
        const kldCmHtml = (
            await axios.get("http://www.ikld.kr/news/articleList.html?sc_sub_section_code=S2N6&view_type=sm", {responseType: "arraybuffer"})
        );
        return kldCmHtml;
    } catch (e) {
        console.log(e);
    }
};

const KldCmCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldCmHtml = await getKldCm();
    const content = iconv.decode(kldCmHtml.data, "utf-8").toString() //한글 인코딩
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
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ikld.kr/${path}`
            });
        });
    };
    return news;
}

const getKldTech = async () => {
    try {
        const kldCmHtml = (
            await axios.get("http://www.ikld.kr/news/articleList.html?sc_sub_section_code=S2N4&view_type=sm", {responseType: "arraybuffer"})
        );
        return kldCmHtml;
    } catch (e) {
        console.log(e);
    }
};

const KldTechCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldCmHtml = await getKldTech();
    const content = iconv.decode(kldCmHtml.data, "utf-8").toString() //한글 인코딩
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
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ikld.kr/${path}`
            });
        });
    };
    return news;
}

const getKldSafety = async () => {
    try {
        const kldCmHtml = (
            await axios.get("http://www.ikld.kr/news/articleList.html?sc_sub_section_code=S2N37&view_type=sm", {responseType: "arraybuffer"})
        );
        return kldCmHtml;
    } catch (e) {
        console.log(e);
    }
};

const KldSafetyCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kldCmHtml = await getKldSafety();
    const content = iconv.decode(kldCmHtml.data, "utf-8").toString() //한글 인코딩
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
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ikld.kr/${path}`
            });
        });
    };
    return news;
}

module.exports = { KldConCrawling, KldCmCrawling, KldTechCrawling, KldSafetyCrawling };