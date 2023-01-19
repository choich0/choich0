const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');

const getSRocm = async () => {
    try {
        const sRocmHtml = (
            await axios.get("https://www.molit.go.kr/srocm/USR/BORD0201/m_13077/BRD.jsp", {responseType: "arraybuffer"})
        );
        return sRocmHtml;
    } catch (e) {
        console.log(e);
    }
};

const SRocmCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const sRocmHtml = await getSRocm();
    const content = iconv.decode(sRocmHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 4; i < 14; i++) {
        const list_text_inner_arr = $(
            "#TB_TBS > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".txt-l"); 
            const path = $(td).find("a").first().attr("href");
            const dateStr = $(td).find("td:nth-child(3)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.molit.go.kr/srocm/USR/BORD0201/m_13077${path}`
            });
        });
    };
    return news;
}

const getWRocm = async () => {
    try {
        const sRocmHtml = (
            await axios.get("https://www.molit.go.kr/wrocm/USR/BORD0201/m_15958/BRD.jsp", {responseType: "arraybuffer"})
        );
        return sRocmHtml;
    } catch (e) {
        console.log(e);
    }
};

const WRocmCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const sRocmHtml = await getWRocm();
    const content = iconv.decode(sRocmHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#TB_TBS > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".txt-l"); 
            const path = $(td).find("a").first().attr("href");
            const dateStr = $(td).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.molit.go.kr/wrocm/USR/BORD0201/m_15958${path}`
            });
        });
    };
    return news;
}

const getDRocm = async () => {
    try {
        const sRocmHtml = (
            await axios.get("http://www.molit.go.kr/drocm/USR/BORD0201/m_16063/BRD.jsp", {responseType: "arraybuffer"})
        );
        return sRocmHtml;
    } catch (e) {
        console.log(e);
    }
};

const DRocmCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const sRocmHtml = await getDRocm();
    const content = iconv.decode(sRocmHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#TB_TBS > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".txt-l"); 
            const path = $(td).find("a").first().attr("href");
            const dateStr = $(td).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.molit.go.kr/drocm/USR/BORD0201/m_16063${path}`
            });
        });
    };
    return news;
}

const getBRocm = async () => {
    try {
        const sRocmHtml = (
            await axios.get("https://www.molit.go.kr/brocm/USR/BORD0201/m_15087/BRD.jsp", {responseType: "arraybuffer"})
        );
        return sRocmHtml;
    } catch (e) {
        console.log(e);
    }
};

const BRocmCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const sRocmHtml = await getBRocm();
    const content = iconv.decode(sRocmHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 1; i < 11; i++) {
        const list_text_inner_arr = $(
            "#TB_TBS > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".txt-l"); 
            const path = $(td).find("a").first().attr("href");
            const dateStr = $(td).find("td:nth-child(4)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `https://www.molit.go.kr/brocm/USR/BORD0201/m_15087${path}`
            });
        });
    };
    return news;
}

const getIRocm = async () => {
    try {
        const sRocmHtml = (
            await axios.get("http://www.molit.go.kr/irocm/USR/BORD0201/m_15642/BRD.jsp", {responseType: "arraybuffer"})
        );
        return sRocmHtml;
    } catch (e) {
        console.log(e);
    }
};

const IRocmCrawling = async() => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; //nodejs 에서 https 접속시 오류 해결
    const sRocmHtml = await getIRocm();
    const content = iconv.decode(sRocmHtml.data, "EUC-KR").toString() //한글 인코딩
    const $ = cheerio.load(content);

    let news = [];
    for (var i = 4; i < 14; i++) {
        const list_text_inner_arr = $(
            "#TB_TBS > tbody > tr:nth-child(" + i + ")"
        ).toArray();              
        
        list_text_inner_arr.forEach((td) => {
            const title = $(td).find(".txt-l"); 
            const path = $(td).find("a").first().attr("href");
            const dateStr = $(td).find("td:nth-child(3)");
            const date = dateStr.text().replace(/[^0-9, -]/g, "")

            news.push({
                nTitle: title.text().trim(),
                nDate: date.trim().substring(0, 10),
                nLink: `http://www.molit.go.kr/irocm/USR/BORD0201/m_15642${path}`
            });
        });
    };
    return news;
}

module.exports = { SRocmCrawling, WRocmCrawling, DRocmCrawling, BRocmCrawling, IRocmCrawling };