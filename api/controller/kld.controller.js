const { KLDCON, KLDCM, KLDTECH, KLDSAFETY } = require('../database');

async function getAllCon(req, res){
    const result = await KLDCON.findAll();
    res.status(200).json({ result });
}

async function updateCon(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KLDCON.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KLDCON.create(req.body);
    } else {
        await KLDCON.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeCon(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KLDCON.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllCm(req, res){
    const result = await KLDCM.findAll();
    res.status(200).json({ result });
}

async function updateCm(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KLDCM.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KLDCM.create(req.body);
    } else {
        await KLDCM.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeCm(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KLDCM.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllTech(req, res){
    const result = await KLDTECH.findAll();
    res.status(200).json({ result });
}

async function updateTech(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KLDTECH.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KLDTECH.create(req.body);
    } else {
        await KLDTECH.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeTech(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KLDTECH.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllSafety(req, res){
    const result = await KLDSAFETY.findAll();
    res.status(200).json({ result });
}

async function updateSafety(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KLDSAFETY.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KLDSAFETY.create(req.body);
    } else {
        await KLDSAFETY.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeSafety(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KLDSAFETY.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllCon, updateCon, removeCon,
    getAllCm, updateCm, removeCm,
    getAllTech, updateTech, removeTech,
    getAllSafety, updateSafety, removeSafety,
};