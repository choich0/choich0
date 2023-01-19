const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getKffaAnn = async () => {
    try {
        const kffaAnnHtml = (
            await axios.get("http://www.ekffa.or.kr/fe/bbs/9/NR_list.do?ctgCd=100", {responseType: "arraybuffer"})
        );
        return kffaAnnHtml;
    } catch (e) {
        console.log(e);
    }
};

const KffaAnnCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kffaAnnHtml = await getKffaAnn();
    const content = iconv.decode(kffaAnnHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents-wrap > div.contents > div.table-list > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".ellipsis"); 
            const pathStr = $(li).find("a").first().attr("onclick");
            const path = pathStr.trim().substring(10, 15)
            const dateStr = $(li).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ekffa.or.kr/fe/bbs/9/NR_view.do?_m=&bbsCd=9&bbsSeq=${path}&currentPage=1&rowPerPage=10&ctgCd=100&searchKey=&searchVal=`
            });
        });
    };
    return news;
}

const getKffaNot = async () => {
    try {
        const kffaNotHtml = (
            await axios.get("http://www.ekffa.or.kr/fe/bbs/7/NR_list.do", {responseType: "arraybuffer"})
        );
        return kffaNotHtml;
    } catch (e) {
        console.log(e);
    }
};

const KffaNotCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kffaNotHtml = await getKffaNot();
    const content = iconv.decode(kffaNotHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents-wrap > div.contents > div.table-list > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".ellipsis"); 
            const pathStr = $(li).find("a").first().attr("onclick");
            const path = pathStr.trim().substring(10, 15)
            const dateStr = $(li).find("td:nth-child(5)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ekffa.or.kr/fe/bbs/7/NR_view.do?_m=&bbsCd=7&bbsSeq=${path}&currentPage=1&rowPerPage=10&ctgCd=100&searchKey=&searchVal=`
            });
        });
    };
    return news;
}

const getKffaRaw = async () => {
    try {
        const kffaRawHtml = (
            await axios.get("http://www.ekffa.or.kr/fe/bbs/8/NR_list.do", {responseType: "arraybuffer"})
        );
        return kffaRawHtml;
    } catch (e) {
        console.log(e);
    }
};

const KffaRawCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kffaRawHtml = await getKffaRaw();
    const content = iconv.decode(kffaRawHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents-wrap > div.contents > div.table-list > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".ellipsis"); 
            const pathStr = $(li).find("a").first().attr("onclick");
            const path = pathStr.trim().substring(10, 15)
            const dateStr = $(li).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.ekffa.or.kr/fe/bbs/8/NR_view.do?_m=&bbsCd=8&bbsSeq=${path}&currentPage=1&rowPerPage=10&ctgCd=100&searchKey=&searchVal=`
            });
        });
    };
    return news;
}

module.exports = { KffaAnnCrawling, KffaNotCrawling, KffaRawCrawling };