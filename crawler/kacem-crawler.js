const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getKacemAnn = async () => {
    try {
        const kacemAnnHtml = (
            await axios.get("https://www.ekacem.or.kr:446/news/announce_li.asp", {responseType: "arraybuffer"})
        );
        return kacemAnnHtml;
    } catch (e) {
        console.log(e);
    }
};

const KacemAnnCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const kacemAnnHtml = await getKacemAnn();
    const content = iconv.decode(kacemAnnHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#bd-wrap > table.tbl-list > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".lt"); 
            const path = $(li).find("a").first().attr("href");
            const dateStr = $(li).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.ekacem.or.kr:446${path}`
            });
        });
    };
    return news;
}

module.exports = { KacemAnnCrawling };