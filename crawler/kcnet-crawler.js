const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getKcnetTech = async () => {
    try {
        const kcnetTechHtml = (
            await axios.get("https://www.kaia.re.kr/portal/newtec/comparelist.do?menuNo=200076&tecCat1=A&pageUnit=20&pageIndex=1", {responseType: "arraybuffer"})
        );
        return kcnetTechHtml;
    } catch (e) {
        console.log(e);
    }
};

const KcnetTechCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kcnetTechHtml = await getKcnetTech();
    const content = iconv.decode(kcnetTechHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);
    
    let news = [];
    for (var i = 1; i < 21; i++) {
        const list_text_inner_arr = $(
            "#frm > fieldset > table.t_list > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".t_subject"); 
            const path = $(td).find("a").first().attr("href");
            const date = $(td).find("td:nth-child(6)");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim().substring(0, 10),
                nLink: `https://www.kaia.re.kr/${path}`
            });
        });
    };
    return news;
}

const getKcnetNot = async () => {
    try {
        const kcnetNotHtml = (
            await axios.get("https://www.kaia.re.kr/portal/newtec/comparelist.do?menuNo=200076&tecCat1=B&pageUnit=20&pageIndex=1", {responseType: "arraybuffer"})
        );
        return kcnetNotHtml;
    } catch (e) {
        console.log(e);
    }
};

const KcnetNotCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kcnetNotHtml = await getKcnetNot();
    const content = iconv.decode(kcnetNotHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);
    
    let news = [];
    for (var i = 1; i < 21; i++) {
        const list_text_inner_arr = $(
            "#frm > fieldset > table.t_list > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".t_subject"); 
            const path = $(td).find("a").first().attr("href");
            const date = $(td).find("td:nth-child(6)");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim().substring(0, 10),
                nLink: `https://www.kaia.re.kr/${path}`
            });
        });
    };
    return news;
}

const getKcnetNews = async () => {
    try {
        const kcnetNewsHtml = (
            await axios.get("https://www.kaia.re.kr/portal/newtec/comparelist.do?menuNo=200076&tecCat1=C&pageUnit=20&pageIndex=1", {responseType: "arraybuffer"})
        );
        return kcnetNewsHtml;
    } catch (e) {
        console.log(e);
    }
};

const KcnetNewsCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kcnetNewsHtml = await getKcnetNews();
    const content = iconv.decode(kcnetNewsHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);
    
    let news = [];
    for (var i = 1; i < 21; i++) {
        const list_text_inner_arr = $(
            "#frm > fieldset > table.t_list > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".t_subject"); 
            const path = $(td).find("a").first().attr("href");
            const date = $(td).find("td:nth-child(6)");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim().substring(0, 10),
                nLink: `https://www.kaia.re.kr/${path}`
            });
        });
    };
    return news;
}

module.exports = { KcnetTechCrawling, KcnetNotCrawling, KcnetNewsCrawling };