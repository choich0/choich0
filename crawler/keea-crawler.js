const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getKeeaAnn = async () => {
    try {
        const keeaAnnHtml = (
            await axios.get("https://www.keea.or.kr/head/wno/getWNO01R01List.do?bran_id=10&board_id=N01", {responseType: "arraybuffer"})
        );
        return keeaAnnHtml;
    } catch (e) {
        console.log(e);
    }
};

const KeeaAnnCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const keeaAnnHtml = await getKeeaAnn();
    const content = iconv.decode(keeaAnnHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#content > div.detail_content > div.dataTable.mgTop06.mgBtm06 > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find("td.alignL"); 
            const pathStr = $(li).find("a").first().attr("href");
            const path = pathStr.trim().substring(19, 23)
            const dateStr = $(li).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.keea.or.kr/head/wno/getWNO01R02View.do?board_id=N01&bran_id=10&seq=${path}`
            });
        });
    };
    return news;
}

const getKeeaRaw = async () => {
    try {
        const keeaRawHtml = (
            await axios.get("https://www.keea.or.kr/head/wno/getWNO01R01List.do?bran_id=10&board_id=L01", {responseType: "arraybuffer"})
        );
        return keeaRawHtml;
    } catch (e) {
        console.log(e);
    }
};

const KeeaRawCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const keeaRawHtml = await getKeeaRaw();
    const content = iconv.decode(keeaRawHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#content > div.detail_content > div.dataTable.mgTop06.mgBtm06 > table > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find("td.alignL"); 
            const pathStr = $(li).find("a").first().attr("href");
            const path = pathStr.trim().substring(19, 22)
            const dateStr = $(li).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.keea.or.kr/head/wno/getWNO01R02View.do?board_id=L01&bran_id=10&seq=${path}`
            });
        });
    };
    return news;
}

module.exports = { KeeaAnnCrawling, KeeaRawCrawling };