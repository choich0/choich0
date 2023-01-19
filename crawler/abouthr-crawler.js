const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getAbouthrMg = async () => {
    try {
        const abouthrMgHtml = (
            await axios.get("http://www.abouthr.co.kr/news/articleList.html?sc_sub_section_code=S2N77&view_type=sm", {responseType: "arraybuffer"})
        );
        return abouthrMgHtml;
    } catch (e) {
        console.log(e);
    }
};

const AbouthrMgCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const abouthrMgHtml = await getAbouthrMg();
    const content = iconv.decode(abouthrMgHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            `#section-list > ul > li:nth-child(${i})`
        ).toArray();
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".byline").text().replace(/[^0-9 -]/g, "");
            const year = dateStr.trim().substring(0, 4)
            const month = dateStr.trim().substring(4, 6)
            const day = dateStr.trim().substring(6, 8)
            const date = `${year}-${month}-${day}`

            news.push({
                nTitle: title.text().trim(),
                nDate: date,
                nLink: `http://www.abouthr.co.kr${path}`
            });
        });
    };
    return news;
}

const getAbouthrPr = async () => {
    try {
        const abouthrPrHtml = (
            await axios.get("http://www.abouthr.co.kr/news/articleList.html?sc_sub_section_code=S2N78&view_type=sm", {responseType: "arraybuffer"})
        );
        return abouthrPrHtml;
    } catch (e) {
        console.log(e);
    }
};

const AbouthrPrCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const abouthrPrHtml = await getAbouthrPr();
    const content = iconv.decode(abouthrPrHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            `#section-list > ul > li:nth-child(${i})`
        ).toArray();
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".byline").text().replace(/[^0-9 -]/g, "");
            const year = dateStr.trim().substring(0, 4)
            const month = dateStr.trim().substring(4, 6)
            const day = dateStr.trim().substring(6, 8)
            const date = `${year}-${month}-${day}`

            news.push({
                nTitle: title.text().trim(),
                nDate: date,
                nLink: `http://www.abouthr.co.kr${path}`
            });
        });
    };
    return news;
}

const getAbouthrRc = async () => {
    try {
        const abouthrRcHtml = (
            await axios.get("http://www.abouthr.co.kr/news/articleList.html?sc_sub_section_code=S2N79&view_type=sm", {responseType: "arraybuffer"})
        );
        return abouthrRcHtml;
    } catch (e) {
        console.log(e);
    }
};

const AbouthrRcCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const abouthrRcHtml = await getAbouthrRc();
    const content = iconv.decode(abouthrRcHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            `#section-list > ul > li:nth-child(${i})`
        ).toArray();
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".byline").text().replace(/[^0-9 -]/g, "");
            const year = dateStr.trim().substring(0, 4)
            const month = dateStr.trim().substring(4, 6)
            const day = dateStr.trim().substring(6, 8)
            const date = `${year}-${month}-${day}`

            news.push({
                nTitle: title.text().trim(),
                nDate: date,
                nLink: `http://www.abouthr.co.kr${path}`
            });
        });
    };
    return news;
}

module.exports = { AbouthrMgCrawling, AbouthrPrCrawling, AbouthrRcCrawling };