const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getCadTv = async () => {
    try {
        const cadTvHtml = (
            await axios.get("https://www.cadgraphics.co.kr/index.php?pages=tv&sub=tv01&subcate=%EA%B1%B4%EC%B6%95#list_area", {responseType: "arraybuffer"})
        );
        return cadTvHtml;
    } catch (e) {
        console.log(e);
    }
};

const CadTvCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const cadTvHtml = await getCadTv();
    const content = iconv.decode(cadTvHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);
    
    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > div.wrap > div > div.list_area > div.loadlist > div:nth-child(1) > div:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((div) => {
            const title = $(div).find("div.list_subject.mt_5"); 
            const pathStr = $(div).find("a").first().attr("onclick");
            const path = pathStr.trim().substring(8, 11)
            const dateStr = $(div).find(".nowrap");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.cadgraphics.co.kr/newsview.php?pages=tv&sub=tv01&catecode=%EA%B1%B4%EC%B6%95&num=${path}`
            });
        });
    };
    return news;
}

const getCadSpe = async () => {
    try {
        const cadSpeHtml = (
            await axios.get("https://www.cadgraphics.co.kr/index.php?pages=lecture&sub=lecture01&subcate=7#list_area", {responseType: "arraybuffer"})
        );
        return cadSpeHtml;
    } catch (e) {
        console.log(e);
    }
};

const CadSpeCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const cadSpeHtml = await getCadSpe();
    const content = iconv.decode(cadSpeHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);
    
    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > div > div.mt_40 > div.list_area > div.loadlist > div:nth-child(1) > div:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((div) => {
            const title = $(div).find("div.list_subject"); 
            const path = $(div).find("a").first().attr("href");
            const dateStr = $(div).find("span:nth-child(2)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim(),
                nLink: `https://www.cadgraphics.co.kr/${path}`
            });
        });
    };
    return news;
}

const getCadLec = async () => {
    try {
        const cadLecHtml = (
            await axios.get("https://www.cadgraphics.co.kr/index.php?pages=lecture&sub=lecture02&subcate=12#list_area", {responseType: "arraybuffer"})
        );
        return cadLecHtml;
    } catch (e) {
        console.log(e);
    }
};

const CadLecCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const cadLecHtml = await getCadLec();
    const content = iconv.decode(cadLecHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);
    
    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > div > div.mt_40 > div.list_area > div.loadlist > div:nth-child(1) > div:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((div) => {
            const title = $(div).find("div.list_subject"); 
            const path = $(div).find("a").first().attr("href");
            const dateStr = $(div).find("span:nth-child(2)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim(),
                nLink: `https://www.cadgraphics.co.kr/${path}`
            });
        });
    };
    return news;
}

const getCadNews = async () => {
    try {
        const cadNewsHtml = (
            await axios.get("https://www.cadgraphics.co.kr/index.php?pages=news&sub=news01&subcate=3#list_area", {responseType: "arraybuffer"})
        );
        return cadNewsHtml;
    } catch (e) {
        console.log(e);
    }
};

const CadNewsCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const cadNewsHtml = await getCadNews();
    const content = iconv.decode(cadNewsHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);
    
    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > div > div.mt_40 > div.list_area > div.loadlist > div:nth-child(1) > div:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((div) => {
            const title = $(div).find("div.list_subject"); 
            const path = $(div).find("a").first().attr("href");
            const dateStr = $(div).find("span:nth-child(2)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim(),
                nLink: `https://www.cadgraphics.co.kr/${path}`
            });
        });
    };
    return news;
}

module.exports = { CadTvCrawling, CadSpeCrawling, CadLecCrawling, CadNewsCrawling };