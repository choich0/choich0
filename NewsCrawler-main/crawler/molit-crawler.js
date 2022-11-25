const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getMolitCity = async () => {
    try {
        const molitCityHtml = (
            await axios.get("http://www.molit.go.kr/USR/NEWS/m_71/lst.jsp?search_section=p_sec_9", {responseType: "arraybuffer"})
        );
        return molitCityHtml;
    } catch (e) {
        console.log(e);
    }
};

const MolitCityCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const molitCityHtml = await getMolitCity();
    const content = iconv.decode(molitCityHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find("a").first(); // 첫번째 <a> 태그
            const path = title.attr("href"); // 첫번째 <a> 태그 url
            const dateStr = $(tr).find("td.bd_date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.molit.go.kr/USR/NEWS/m_71/${path}`
            });
        });
    };
    return news;
}

const getMolitLand = async () => {
    try {
        const molitLandHtml = (
            await axios.get("http://www.molit.go.kr/USR/NEWS/m_71/lst.jsp?search_section=p_sec_2", {responseType: "arraybuffer"})
        );
        return molitLandHtml;
    } catch (e) {
        console.log(e);
    }
};

const MolitLandCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const molitLandHtml = await getMolitLand();
    const content = iconv.decode(molitLandHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find("a").first(); // 첫번째 <a> 태그
            const path = title.attr("href"); // 첫번째 <a> 태그 url
            const dateStr = $(tr).find("td.bd_date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.molit.go.kr/USR/NEWS/m_71/${path}`
            });
        });
    };
    return news;
}

const getMolitCon = async () => {
    try {
        const molitConHtml = (
            await axios.get("http://www.molit.go.kr/USR/NEWS/m_71/lst.jsp?search_section=p_sec_3", {responseType: "arraybuffer"})
        );
        return molitConHtml;
    } catch (e) {
        console.log(e);
    }
};

const MolitConCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const molitConHtml = await getMolitCon();
    const content = iconv.decode(molitConHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find("a").first(); // 첫번째 <a> 태그
            const path = title.attr("href"); // 첫번째 <a> 태그 url
            const dateStr = $(tr).find("td.bd_date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.molit.go.kr/USR/NEWS/m_71/${path}`
            });
        });
    };
    return news;
}

const getMolitGen = async () => {
    try {
        const molitGenHtml = (
            await axios.get("http://www.molit.go.kr/USR/NEWS/m_71/lst.jsp?search_section=p_sec_3", {responseType: "arraybuffer"})
        );
        return molitGenHtml;
    } catch (e) {
        console.log(e);
    }
};

const MolitGenCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const molitGenHtml = await getMolitGen();
    const content = iconv.decode(molitGenHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find("a").first(); // 첫번째 <a> 태그
            const path = title.attr("href"); // 첫번째 <a> 태그 url
            const dateStr = $(tr).find("td.bd_date");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.molit.go.kr/USR/NEWS/m_71/${path}`
            });
        });
    };
    return news;
}

module.exports = { MolitCityCrawling, MolitLandCrawling, MolitConCrawling, MolitGenCrawling };