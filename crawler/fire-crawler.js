const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getFireFpn = async () => {
    try {
        const fireFpnHtml = (
            await axios.get("https://www.fpn119.co.kr/search.html?submit=submit&search_and=1&search_exec=all&search_section=all&news_order=1&search=%EA%B1%B4%EC%84%A4&imageField.x=0&imageField.y=0", {responseType: "arraybuffer"})
        );
        return fireFpnHtml;
    } catch (e) {
        console.log(e);
    }
};

const FireFpnCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const fireFpnHtml = await getFireFpn();
    const content = iconv.decode(fireFpnHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#search_result > div.search_result_list > div:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((div) => {
            const title = $(div).find("dt:nth-child(1)"); 
            const path = title.find("a").first().attr("href");
            const dateFind = $(div).find(".etc");
            const dateStr = dateFind.text().split("|");
            const date = dateStr[1].replace(/[^0-9, 시간 전, ., /, -]/g, "");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.fpn119.co.kr${path}`
            });
        });
    };
    return news;
}

const getFireNfa = async () => {
    try {
        const fireNfaHtml = (
            await axios.get("https://www.nfa.go.kr/nfa/news/firenews/disasterNews/", {responseType: "arraybuffer"})
        );
        return fireNfaHtml;
    } catch (e) {
        console.log(e);
    }
};

const FireNfaCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const fireNfaHtml = await getFireNfa();
    const content = iconv.decode(fireNfaHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#bbsForm > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find(".title"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(tr).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.nfa.go.kr/nfa/news/firenews/disasterNews/${path}`
            });
        });
    };
    return news;
}

const getFireLaw = async () => {
    try {
        const fireLawHtml = (
            await axios.get("https://www.nfa.go.kr/nfa/publicrelations/legalinformation/legislation/", {responseType: "arraybuffer"})
        );
        return fireLawHtml;
    } catch (e) {
        console.log(e);
    }
};

const FireLawCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const fireLawHtml = await getFireLaw();
    const content = iconv.decode(fireLawHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#frmLaw > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find("td:nth-child(1)"); 
            const path = $(tr).find("input").first().attr("value");
            const dateStr = $(tr).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://opinion.lawmaking.go.kr/gcom/ogLmPp/${path}`
            });
        });
    };
    return news;
}

const getFireInfo = async () => {
    try {
        const fireInfoHtml = (
            await axios.get("https://www.nfa.go.kr/nfa/publicrelations/legalinformation/archives/?mode=list&boardId=bbs_0000000000000018&searchCondition=all&searchKeyword=%EC%86%8C%EB%B0%A9&pageIdx=1", {responseType: "arraybuffer"})
        );
        return fireInfoHtml;
    } catch (e) {
        console.log(e);
    }
};

const FireInfoCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const fireInfoHtml = await getFireInfo();
    const content = iconv.decode(fireInfoHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#bbsForm > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const title = $(tr).find(".title"); 
            const path = $(tr).find("a").first().attr("href");
            const dateStr = $(tr).find("td:nth-child(3)");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.nfa.go.kr/nfa/publicrelations/legalinformation/archives/${path}`
            });
        });
    };
    return news;
}

module.exports = { FireFpnCrawling, FireNfaCrawling, FireLawCrawling, FireInfoCrawling };