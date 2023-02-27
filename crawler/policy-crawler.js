const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getPolicyDh = async () => {
    try {
        const policyLeHtml = (
            await axios.get("http://www.dhilbo.net/news/list.php?mcode=m63a8pu", {responseType: "arraybuffer"})
        );
        return policyLeHtml;
    } catch (e) {
        console.log(e);
    }
};

const PolicyDhCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const policyLeHtml = await getPolicyDh();
    const content = iconv.decode(policyLeHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#contents > div.basicList > ul > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".title"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".registDate");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.dhilbo.net/${path}`
            });
        });
    };
    return news;
}

const getPolicyLe = async () => {
    try {
        const policyLeHtml = (
            await axios.get("http://www.lenews.co.kr/news/articleList.html?sc_section_code=S1N1&view_type=sm", {responseType: "arraybuffer"})
        );
        return policyLeHtml;
    } catch (e) {
        console.log(e);
    }
};

const PolicyLeCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const policyLeHtml = await getPolicyLe();
    const content = iconv.decode(policyLeHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#section-list > ul > li:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".byline");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.lenews.co.kr${path}`
            });
        });
    };
    return news;
}

const getPolicyCon = async () => {
    try {
        const policyConHtml = (
            await axios.get("http://www.constimes.co.kr/news/articleList.html?sc_sub_section_code=S2N1&view_type=sm", {responseType: "arraybuffer"})
        );
        return policyConHtml;
    } catch (e) {
        console.log(e);
    }
};

const PolicyConCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const policyConHtml = await getPolicyCon();
    const content = iconv.decode(policyConHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#user-container > div.float-center.max-width-1080 > div.user-content > section > article > div.article-list > section > div:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((li) => {
            const title = $(li).find(".list-titles"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(li).find(".list-dated");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.constimes.co.kr${path}`
            });
        });
    };
    return news;
}

const getPolicyMc = async () => {
    try {
        const policyMcHtml = (
            await axios.get("https://www.mcnews.co.kr/sub.html?section=sc1", {responseType: "arraybuffer"})
        );
        return policyMcHtml;
    } catch (e) {
        console.log(e);
    }
};

const PolicyMcCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const policyMcHtml = await getPolicyMc();
    const content = iconv.decode(policyMcHtml.data, "utf-8").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#sub_read_list > div:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((div) => {
            const title = $(div).find("dt:nth-child(1)"); 
            const path = title.find("a").first().attr("href");
            const dateStr = $(div).find(".etc");
            const date = dateStr.text().replace(/[^0-9, 시간 전, ., /, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.mcnews.co.kr${path}`
            });
        });
    };
    return news;
}

module.exports = { PolicyDhCrawling, PolicyLeCrawling, PolicyConCrawling, PolicyMcCrawling };