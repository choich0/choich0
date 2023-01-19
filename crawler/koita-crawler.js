const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getKoitaNot = async () => {
    try {
        const koitaNotHtml = (
            await axios.get("https://www.koita.or.kr/notice/notice_list.aspx", {responseType: "arraybuffer"})
        );
        return koitaNotHtml;
    } catch (e) {
        console.log(e);
    }
};

const KoitaNotCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const workRawHtml = await getKoitaNot();
    const content = iconv.decode(workRawHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);
    
    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            `body > div.bodyWrap.wrap > div > div > div > div > div > div > div.rit_box_wrap > div.fix > div > div > div.sub_contents_form_section > div > div.pds_new_table_section > table > tbody > tr:nth-child(${i})`
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".lft_td"); 
            const path = $(td).find("a").first().attr("href").substring(41, 45);
            const date = $(td).find("td:nth-child(5)");

            news.push({
                nTitle: title.text().trim(),
                nDate: date.text().trim(),
                nLink: `https://www.koita.or.kr/notice/notice_view.aspx?no=${path}`
            });
        });
    };
    return news;
}

module.exports = { KoitaNotCrawling };