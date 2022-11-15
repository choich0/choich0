const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getHTML = async () => {
    try {
        const html = (
            await axios.get("https://www.ekacem.or.kr:446/news/announce_li.asp", {responseType: "arraybuffer"})
        );
        return html;
    } catch (e) {
        console.log(e);
    }
};

const NewsCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const html = await getHTML();
    const content = iconv.decode(html.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 2; i < 12; i++) {
        const list_text_inner_arr = $(
            "#contents > div.mainConTB > div.contentsView > div > table.bbs_list > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((tr) => {
            const aFirst = $(tr).find("a").first(); // 첫번째 <a> 태그
            const path = aFirst.attr("href"); // 첫번째 <a> 태그 url
            const aLast = $(tr).find("td:nth-child(4)");
            news.push({
                nTitle: aFirst.text().trim(),
                nDate: aLast.text().trim(),
                nLink: `https://www.ekacem.or.kr:446/${path}`
            });
        });
    };
    return news;
}


module.exports = { NewsCrawling };