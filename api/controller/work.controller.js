const { WORKRAW, WORKPOLY, WORKJUD } = require('../database');

async function getAllRaw(req, res){
    const result = await WORKRAW.findAll();
    res.status(200).json({ result });
}

async function updateRaw(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await WORKRAW.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await WORKRAW.create(req.body);
    } else {
        await WORKRAW.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeRaw(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await WORKRAW.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllPoly(req, res){
    const result = await WORKPOLY.findAll();
    res.status(200).json({ result });
}

async function updatePoly(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await WORKPOLY.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await WORKPOLY.create(req.body);
    } else {
        await WORKPOLY.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removePoly(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await WORKPOLY.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllJud(req, res){
    const result = await WORKJUD.findAll();
    res.status(200).json({ result });
}

async function updateJud(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await WORKJUD.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await WORKJUD.create(req.body);
    } else {
        await WORKJUD.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeJud(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await WORKJUD.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllRaw, updateRaw, removeRaw,
    getAllPoly, updatePoly, removePoly,
    getAllJud, updateJud, removeJud,
};