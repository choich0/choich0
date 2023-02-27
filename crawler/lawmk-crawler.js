const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getLawmkOp = async () => {
    try {
        const lawmkOpHtml = (
            await axios.get("https://opinion.lawmaking.go.kr/gcom/admpp/list?myOpnYn=&lsClsCd=&closing=&pntcNo=&pntcNo2=", {responseType: "arraybuffer"})
        );
        return lawmkOpHtml;
    } catch (e) {
        console.log(e);
    }
};

const LawmkOpCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const lawmkOpHtml = await getLawmkOp();
    const content = iconv.decode(lawmkOpHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 21; i++) {
        const list_text_inner_arr = $(
            "#listView > ul:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((ul) => {
            const titleStr = $(ul).find("li:nth-child(2)").text().replace(/[\n'+]/gi, '').split("]");
            const title = titleStr[1];
            const pathStr = $(ul).find("li:nth-child(2)"); 
            const path = pathStr.find("a").first().attr("href");
            const dateStr = $(ul).find("li:nth-child(5)");
            const date = dateStr.text().replace(/[^0-9 ~ . / -]/g, "")

            news.push({
                nTitle: title.trim(),
                nDate: date.trim(),
                nLink: `https://opinion.lawmaking.go.kr${path}`
            });
        });
    };
    return news;
}

module.exports = { LawmkOpCrawling };