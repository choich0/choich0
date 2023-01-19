const { KCNETTECH, KCNETNOT, KCNETNEWS } = require('../database');

async function getAllTech(req, res){
    const result = await KCNETTECH.findAll();
    res.status(200).json({ result });
}

async function updateTech(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KCNETTECH.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KCNETTECH.create(req.body);
    } else {
        await KCNETTECH.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeTech(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KCNETTECH.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllNot(req, res){
    const result = await KCNETNOT.findAll();
    res.status(200).json({ result });
}

async function updateNot(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KCNETNOT.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KCNETNOT.create(req.body);
    } else {
        await KCNETNOT.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeNot(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KCNETNOT.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllNews(req, res){
    const result = await KCNETNEWS.findAll();
    res.status(200).json({ result });
}

async function updateNews(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KCNETNEWS.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KCNETNEWS.create(req.body);
    } else {
        await KCNETNEWS.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeNews(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KCNETNEWS.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllTech, updateTech, removeTech,
    getAllNot, updateNot, removeNot,
    getAllNews, updateNews, removeNews,
};