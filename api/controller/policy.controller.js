const { POLICYLE, POLICYDH, POLICYCON, POLICYMC } = require('../database');

async function getAllLe(req, res){
    const result = await POLICYLE.findAll();
    res.status(200).json({ result });
}

async function updateLe(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await POLICYLE.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await POLICYLE.create(req.body);
    } else {
        await POLICYLE.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeLe(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await POLICYLE.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllDh(req, res){
    const result = await POLICYDH.findAll();
    res.status(200).json({ result });
}

async function updateDh(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await POLICYDH.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await POLICYDH.create(req.body);
    } else {
        await POLICYDH.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeDh(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await POLICYDH.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllCon(req, res){
    const result = await POLICYCON.findAll();
    res.status(200).json({ result });
}

async function updateCon(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await POLICYCON.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await POLICYCON.create(req.body);
    } else {
        await POLICYCON.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeCon(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await POLICYCON.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllMc(req, res){
    const result = await POLICYMC.findAll();
    res.status(200).json({ result });
}

async function updateMc(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await POLICYMC.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await POLICYMC.create(req.body);
    } else {
        await POLICYMC.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeMc(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await POLICYMC.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllLe, updateLe, removeLe,
    getAllDh, updateDh, removeDh,
    getAllCon, updateCon, removeCon,
    getAllMc, updateMc, removeMc,
};