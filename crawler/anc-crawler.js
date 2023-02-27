const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getAncCm = async () => {
    try {
        const ancCmHtml = (
            await axios.get("http://www.ancnews.kr/news/articleList.html?sc_serial_code=SRN2&view_type=sm", {responseType: "arraybuffer"})
        );
        return ancCmHtml;
    } catch (e) {
        console.log(e);
    }
};

const AncCmCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const ancCmHtml = await getAncCm();
    const content = iconv.decode(ancCmHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#section-list > ul > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".byline");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ancnews.kr${path}`
            });
        });
    };
    return news;
}

const getAncSafety = async () => {
    try {
        const ancSafetyHtml = (
            await axios.get("http://www.ancnews.kr/news/articleList.html?sc_serial_code=SRN5&view_type=sm", {responseType: "arraybuffer"})
        );
        return ancSafetyHtml;
    } catch (e) {
        console.log(e);
    }
};

const AncSafetyCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const ancSafetyHtml = await getAncSafety();
    const content = iconv.decode(ancSafetyHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#section-list > ul > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".byline");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ancnews.kr${path}`
            });
        });
    };
    return news;
}

const getAncPol = async () => {
    try {
        const ancCmHtml = (
            await axios.get("http://www.ancnews.kr/news/articleList.html?sc_serial_code=SRN4&view_type=sm", {responseType: "arraybuffer"})
        );
        return ancCmHtml;
    } catch (e) {
        console.log(e);
    }
};

const AncPolCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const ancCmHtml = await getAncPol();
    const content = iconv.decode(ancCmHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#section-list > ul > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".byline");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ancnews.kr${path}`
            });
        });
    };
    return news;
}

const getAncGre = async () => {
    try {
        const ancGreHtml = (
            await axios.get("http://www.ancnews.kr/news/articleList.html?sc_serial_code=SRN6&view_type=sm", {responseType: "arraybuffer"})
        );
        return ancGreHtml;
    } catch (e) {
        console.log(e);
    }
};

const AncGreCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const ancGreHtml = await getAncGre();
    const content = iconv.decode(ancGreHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#section-list > ul > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".byline");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ancnews.kr${path}`
            });
        });
    };
    return news;
}

module.exports = { AncCmCrawling, AncSafetyCrawling, AncPolCrawling, AncGreCrawling };