const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getSaramPlan = async () => {
    try {
        const saramPlanHtml = (
            await axios.get("https://www.saramin.co.kr/zf_user/hr-magazine/list?subject_type=manage&category=&txt_keyword=", {responseType: "arraybuffer"})
        );
        return saramPlanHtml;
    } catch (e) {
        console.log(e);
    }
};

const SaramPlanCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const saramPlanHtml = await getSaramPlan();
    const content = iconv.decode(saramPlanHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#list_magazine > li:nth-child(" + i + ")"
        ).toArray();
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".subject"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".upload");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.saramin.co.kr${path}`
            });
        });
    };
    return news;
}

const getSaramEval = async () => {
    try {
        const saramEvalHtml = (
            await axios.get("https://www.saramin.co.kr/zf_user/hr-magazine/list?subject_type=evaluation&category=&txt_keyword=", {responseType: "arraybuffer"})
        );
        return saramEvalHtml;
    } catch (e) {
        console.log(e);
    }
};

const SaramEvalCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const saramEvalHtml = await getSaramEval();
    const content = iconv.decode(saramEvalHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#list_magazine > li:nth-child(" + i + ")"
        ).toArray();
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".subject"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".upload");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.saramin.co.kr${path}`
            });
        });
    };
    return news;
}

const getSaramGroup = async () => {
    try {
        const saramGroupHtml = (
            await axios.get("https://www.saramin.co.kr/zf_user/hr-magazine/list?subject_type=organizational&category=&txt_keyword=", {responseType: "arraybuffer"})
        );
        return saramGroupHtml;
    } catch (e) {
        console.log(e);
    }
};

const SaramGroupCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const saramGroupHtml = await getSaramGroup();
    const content = iconv.decode(saramGroupHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#list_magazine > li:nth-child(" + i + ")"
        ).toArray();
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".subject"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".upload");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.saramin.co.kr${path}`
            });
        });
    };
    return news;
}

const getSaramPol = async () => {
    try {
        const saramPolHtml = (
            await axios.get("https://www.saramin.co.kr/zf_user/hr-magazine/list?subject_type=government_policy&category=&txt_keyword=", {responseType: "arraybuffer"})
        );
        return saramPolHtml;
    } catch (e) {
        console.log(e);
    }
};

const SaramPolCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const saramPolHtml = await getSaramPol();
    const content = iconv.decode(saramPolHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#list_magazine > li:nth-child(" + i + ")"
        ).toArray();
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".subject"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".upload");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.saramin.co.kr${path}`
            });
        });
    };
    return news;
}

const getSaramTrend = async () => {
    try {
        const saramTrendHtml = (
            await axios.get("https://www.saramin.co.kr/zf_user/hr-magazine/list?subject_type=recruitment_trend&category=&txt_keyword=", {responseType: "arraybuffer"})
        );
        return saramTrendHtml;
    } catch (e) {
        console.log(e);
    }
};

const SaramTrendCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const saramTrendHtml = await getSaramTrend();
    const content = iconv.decode(saramTrendHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#list_magazine > li:nth-child(" + i + ")"
        ).toArray();
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".subject"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find(".upload");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.saramin.co.kr${path}`
            });
        });
    };
    return news;
}

module.exports = { SaramPlanCrawling, SaramEvalCrawling, SaramGroupCrawling, SaramPolCrawling, SaramTrendCrawling };