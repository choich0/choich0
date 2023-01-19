const { SROCM, WROCM, DROCM, BROCM, IROCM } = require('../database');

async function getAllS(req, res){
    const result = await SROCM.findAll();
    res.status(200).json({ result });
}

async function updateS(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await SROCM.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await SROCM.create(req.body);
    } else {
        await SROCM.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeS(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await SROCM.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllW(req, res){
    const result = await WROCM.findAll();
    res.status(200).json({ result });
}

async function updateW(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await WROCM.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await WROCM.create(req.body);
    } else {
        await WROCM.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeW(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await WROCM.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllD(req, res){
    const result = await DROCM.findAll();
    res.status(200).json({ result });
}

async function updateD(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await DROCM.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await DROCM.create(req.body);
    } else {
        await DROCM.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeD(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await DROCM.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllB(req, res){
    const result = await BROCM.findAll();
    res.status(200).json({ result });
}

async function updateB(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await BROCM.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await BROCM.create(req.body);
    } else {
        await BROCM.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeB(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await BROCM.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllI(req, res){
    const result = await IROCM.findAll();
    res.status(200).json({ result });
}

async function updateI(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await IROCM.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await IROCM.create(req.body);
    } else {
        await IROCM.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeI(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await IROCM.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllS, updateS, removeS,
    getAllW, updateW, removeW,
    getAllD, updateD, removeD,
    getAllB, updateB, removeB,
    getAllI, updateI, removeI,
};