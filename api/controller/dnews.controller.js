const { DNEWSSTD, DNEWSENG, DNEWSTECH, DNEWSMAT, DNEWSSAFETY } = require('../database');

async function getAllStd(req, res){
    const result = await DNEWSSTD.findAll();
    res.status(200).json({ result });
}

async function updateStd(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await DNEWSSTD.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await DNEWSSTD.create(req.body);
    } else {
        await DNEWSSTD.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeStd(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await DNEWSSTD.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllEng(req, res){
    const result = await DNEWSENG.findAll();
    res.status(200).json({ result });
}

async function updateEng(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await DNEWSENG.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await DNEWSENG.create(req.body);
    } else {
        await DNEWSENG.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeEng(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await DNEWSENG.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllTech(req, res){
    const result = await DNEWSTECH.findAll();
    res.status(200).json({ result });
}

async function updateTech(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await DNEWSTECH.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await DNEWSTECH.create(req.body);
    } else {
        await DNEWSTECH.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeTech(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await DNEWSTECH.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllMat(req, res){
    const result = await DNEWSMAT.findAll();
    res.status(200).json({ result });
}

async function updateMat(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await DNEWSMAT.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await DNEWSMAT.create(req.body);
    } else {
        await DNEWSMAT.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeMat(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await DNEWSMAT.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllSafety(req, res){
    const result = await DNEWSSAFETY.findAll();
    res.status(200).json({ result });
}

async function updateSafety(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await DNEWSSAFETY.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await DNEWSSAFETY.create(req.body);
    } else {
        await DNEWSSAFETY.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeSafety(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await DNEWSSAFETY.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllStd, updateStd, removeStd,
    getAllEng, updateEng, removeEng,
    getAllTech, updateTech, removeTech,
    getAllMat, updateMat, removeMat,
    getAllSafety, updateSafety, removeSafety,
};