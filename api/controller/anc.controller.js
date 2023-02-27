const { ANCCM, ANCSAFETY, ANCPOL, ANCGRE } = require('../database');

async function getAllCm(req, res){
    const result = await ANCCM.findAll();
    res.status(200).json({ result });
}

async function updateCm(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await ANCCM.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await ANCCM.create(req.body);
    } else {
        await ANCCM.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeCm(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await ANCCM.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllSafety(req, res){
    const result = await ANCSAFETY.findAll();
    res.status(200).json({ result });
}

async function updateSafety(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await ANCSAFETY.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await ANCSAFETY.create(req.body);
    } else {
        await ANCSAFETY.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeSafety(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await ANCSAFETY.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllPol(req, res){
    const result = await ANCPOL.findAll();
    res.status(200).json({ result });
}

async function updatePol(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await ANCPOL.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await ANCPOL.create(req.body);
    } else {
        await ANCPOL.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removePol(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await ANCPOL.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllGre(req, res){
    const result = await ANCGRE.findAll();
    res.status(200).json({ result });
}

async function updateGre(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await ANCGRE.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await ANCGRE.create(req.body);
    } else {
        await ANCGRE.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeGre(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await ANCGRE.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllCm, updateCm, removeCm,
    getAllSafety, updateSafety, removeSafety,
    getAllPol, updatePol, removePol,
    getAllGre, updateGre, removeGre,
};