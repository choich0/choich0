const { PROPMK, PROPFN, PROPKLD, PROPDNEWS } = require('../database');

async function getAllMk(req, res){
    const result = await PROPMK.findAll();
    res.status(200).json({ result });
}

async function updateMk(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await PROPMK.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await PROPMK.create(req.body);
    } else {
        await PROPMK.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeMk(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await PROPMK.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllFn(req, res){
    const result = await PROPFN.findAll();
    res.status(200).json({ result });
}

async function updateFn(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await PROPFN.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await PROPFN.create(req.body);
    } else {
        await PROPFN.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeFn(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await PROPFN.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllKld(req, res){
    const result = await PROPKLD.findAll();
    res.status(200).json({ result });
}

async function updateKld(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await PROPKLD.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await PROPKLD.create(req.body);
    } else {
        await PROPKLD.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeKld(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await PROPKLD.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllDnews(req, res){
    const result = await PROPDNEWS.findAll();
    res.status(200).json({ result });
}

async function updateDnews(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await PROPDNEWS.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await PROPDNEWS.create(req.body);
    } else {
        await PROPDNEWS.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeDnews(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await PROPDNEWS.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllMk, updateMk, removeMk,
    getAllFn, updateFn, removeFn,
    getAllKld, updateKld, removeKld,
    getAllDnews, updateDnews, removeDnews,
};