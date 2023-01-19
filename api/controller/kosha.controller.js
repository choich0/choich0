const { KOSHANEWS, KOSHACON, KOSHAGOV } = require('../database');

async function getAllNews(req, res){
    const result = await KOSHANEWS.findAll();
    res.status(200).json({ result });
}

async function updateNews(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KOSHANEWS.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KOSHANEWS.create(req.body);
    } else {
        await KOSHANEWS.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeNews(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KOSHANEWS.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllCon(req, res){
    const result = await KOSHACON.findAll();
    res.status(200).json({ result });
}

async function updateCon(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KOSHACON.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KOSHACON.create(req.body);
    } else {
        await KOSHACON.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeCon(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KOSHACON.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllGov(req, res){
    const result = await KOSHAGOV.findAll();
    res.status(200).json({ result });
}

async function updateGov(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KOSHAGOV.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KOSHAGOV.create(req.body);
    } else {
        await KOSHAGOV.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeGov(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KOSHAGOV.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllNews, updateNews, removeNews,
    getAllCon, updateCon, removeCon,
    getAllGov, updateGov, removeGov,
};