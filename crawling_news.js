const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');
require("dotenv").config({ path: "nodemailer/.env" });
const nodemailer = require("nodemailer");

const getHTML = async () => {
    try {
        const html = (
            await axios.get("https://www.ekacem.or.kr:446/news/announce_li.asp", {responseType: "arraybuffer"})
        );
        return html;
    } catch (e) {
        // console.log(e);
    }
};

const parsing = async() => {
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
                nNumber: i-1,
                nTitle: aFirst.text().trim(),
                nDate: aLast.text().trim(),
                nLink: `https://www.ekacem.or.kr:446/${path}`
            });
        });
    };
    return news;
}

const getJob = async () => {
    const html = await getHTML();
    const jobs = await parsing(html);

    return jobs;
};

const crawlingJob = async () => {
    const jobs = await getJob();

    var h = [];
    jobs.forEach(news => {
        h.push(`
        <tr>
        <th style="border:1px solid lightgray;">${news.nNumber}</th>
        <td style="border:1px solid lightgray;">${news.nTitle}</th>
        <td style="border:1px solid lightgray;">${news.nDate}</th>
        <td>
        <A style="border:1px solid lightgray;" href="${news.nLink}"> 해당 페이지로 연결 </A>
        </td>
        </tr>
        `);
    })

    var r = `
    <table style="border:1px solid lightgray;">
    <thead>
    <tr>
    <th style="border:1px solid lightgray;">구분</th>
    <th style="border:1px solid lightgray;">제목</th>
    <th style="border:1px solid lightgray;">날짜</th>
    <th style="border:1px solid lightgray;">링크</th>
    </tr>
    </thead>
    <tbody>
    ${h}
    </tbody>
    </table>
    `;

    return r;
};

var webcrawling = async () => {
    var list = await crawlingJob();
    console.log(list);

    var http = require('http');
    var url = require('url')

    var app = http.createServer(function(request,response){
        var _url = request.url;

        if(_url == '/'){
        title = 'Web Crawling';
        }
        if(_url == '/favicon.ico'){
            response.writeHead(404);
            response.end();
            return;
        }
        response.writeHead(200);

        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>`
        var template = template + list;
        var template = template + `
        </body>
        </html>
        `
        response.end(template);
    
    });
    app.listen(3000);
}
webcrawling();