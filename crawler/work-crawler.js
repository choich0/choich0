const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getWorkRaw = async () => {
    try {
        const workRawHtml = (
            await axios.get("https://www.worklaw.co.kr/list/list.asp?in_cate=122&in_cate2=0", {responseType: "arraybuffer"})
        );
        return workRawHtml;
    } catch (e) {
        console.log(e);
    }
};

const WorkRawCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const workRawHtml = await getWorkRaw();
    const content = iconv.decode(workRawHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 2; i < 12; i++) {
        const list_text_inner_arr = $(
            `#list_area > div:nth-child(${i})`
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".ccc_title"); 
            const path = title.attr("onclick").substring(42, 107);
            const date = $(td).find(".day");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim().substring(5, 15),
                nLink: `https://www.worklaw.co.kr/view/view.asp${path}`
            });
        });
    };
    return news;
}

const getWorkPoly = async () => {
    try {
        const workPolyHtml = (
            await axios.get("https://www.worklaw.co.kr/list/list.asp?in_cate=123&in_cate2=0", {responseType: "arraybuffer"})
        );
        return workPolyHtml;
    } catch (e) {
        console.log(e);
    }
};

const WorkPolyCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const workPolyHtml = await getWorkPoly();
    const content = iconv.decode(workPolyHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 2; i < 12; i++) {
        const list_text_inner_arr = $(
            `#list_area > div:nth-child(${i})`
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".ccc_title"); 
            const path = title.attr("onclick").substring(42, 107);
            const date = $(td).find(".day");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim().substring(5, 15),
                nLink: `https://www.worklaw.co.kr/view/view.asp${path}`
            });
        });
    };
    return news;
}

const getWorkJud = async () => {
    try {
        const workJudHtml = (
            await axios.get("https://www.worklaw.co.kr/list/list.asp?in_cate=105&in_cate2=0", {responseType: "arraybuffer"})
        );
        return workJudHtml;
    } catch (e) {
        console.log(e);
    }
};

const WorkJudCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const workJudHtml = await getWorkJud();
    const content = iconv.decode(workJudHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 2; i < 12; i++) {
        const list_text_inner_arr = $(
            `#list_area > div:nth-child(${i})`
        ).toArray();
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".writer_tit"); 
            const path = title.attr("onclick").substring(42, 107);
            const date = $(td).find(".day");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim().substring(5, 15),
                nLink: `https://www.worklaw.co.kr/view/view.asp${path}`
            });
        });
    };
    return news;
}

module.exports = { WorkRawCrawling, WorkPolyCrawling, WorkJudCrawling };