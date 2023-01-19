const { KFFAANN, KFFANOT, KFFARAW } = require('../database');

async function getAllAnn(req, res){
    const result = await KFFAANN.findAll();
    res.status(200).json({ result });
}

async function updateAnn(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KFFAANN.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KFFAANN.create(req.body);
    } else {
        await KFFAANN.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeAnn(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KFFAANN.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllNot(req, res){
    const result = await KFFANOT.findAll();
    res.status(200).json({ result });
}

async function updateNot(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KFFANOT.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KFFANOT.create(req.body);
    } else {
        await KFFANOT.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeNot(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KFFANOT.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllRaw(req, res){
    const result = await KFFARAW.findAll();
    res.status(200).json({ result });
}

async function updateRaw(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KFFARAW.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KFFARAW.create(req.body);
    } else {
        await KFFARAW.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeRaw(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KFFARAW.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllAnn, updateAnn, removeAnn,
    getAllNot, updateNot, removeNot,
    getAllRaw, updateRaw, removeRaw,
};