const { ABOUTHRMG, ABOUTHRPR, ABOUTHRRC } = require('../database');

async function getAllMg(req, res){
    const result = await ABOUTHRMG.findAll();
    res.status(200).json({ result });
}

async function updateMg(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await ABOUTHRMG.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await ABOUTHRMG.create(req.body);
    } else {
        await ABOUTHRMG.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeMg(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await ABOUTHRMG.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllPr(req, res){
    const result = await ABOUTHRPR.findAll();
    res.status(200).json({ result });
}

async function updatePr(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await ABOUTHRPR.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await ABOUTHRPR.create(req.body);
    } else {
        await ABOUTHRPR.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removePr(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await ABOUTHRPR.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllRc(req, res){
    const result = await ABOUTHRRC.findAll();
    res.status(200).json({ result });
}

async function updateRc(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await ABOUTHRRC.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await ABOUTHRRC.create(req.body);
    } else {
        await ABOUTHRRC.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeRc(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await ABOUTHRRC.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllMg, updateMg, removeMg,
    getAllPr, updatePr, removePr,
    getAllRc, updateRc, removeRc,
};