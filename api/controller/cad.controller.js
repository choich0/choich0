const { CADTV, CADSPE, CADLEC, CADNEWS } = require('../database');

async function getAllTv(req, res){
    const result = await CADTV.findAll();
    res.status(200).json({ result });
}

async function updateTv(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await CADTV.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await CADTV.create(req.body);
    } else {
        await CADTV.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeTv(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await CADTV.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllSpe(req, res){
    const result = await CADSPE.findAll();
    res.status(200).json({ result });
}

async function updateSpe(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await CADSPE.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await CADSPE.create(req.body);
    } else {
        await CADSPE.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeSpe(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await CADSPE.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllLec(req, res){
    const result = await CADLEC.findAll();
    res.status(200).json({ result });
}

async function updateLec(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await CADLEC.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await CADLEC.create(req.body);
    } else {
        await CADLEC.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeLec(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await CADLEC.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllNews(req, res){
    const result = await CADNEWS.findAll();
    res.status(200).json({ result });
}

async function updateNews(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await CADNEWS.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await CADNEWS.create(req.body);
    } else {
        await CADNEWS.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeNews(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await CADNEWS.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllTv, updateTv, removeTv,
    getAllSpe, updateSpe, removeSpe,
    getAllLec, updateLec, removeLec,
    getAllNews, updateNews, removeNews,
};