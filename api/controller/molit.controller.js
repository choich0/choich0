const { MOLITCITY, MOLITLAND, MOLITCON, MOLITGEN } = require('../database');

async function getAllCity(req, res){
    const result = await MOLITCITY.findAll();
    res.status(200).json({ result });
}

async function updateCity(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await MOLITCITY.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await MOLITCITY.create(req.body);
    } else {
        await MOLITCITY.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeCity(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await MOLITCITY.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllLand(req, res){
    const result = await MOLITLAND.findAll();
    res.status(200).json({ result });
}

async function updateLand(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await MOLITLAND.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await MOLITLAND.create(req.body);
    } else {
        await MOLITLAND.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeLand(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await MOLITLAND.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllCon(req, res){
    const result = await MOLITCON.findAll();
    res.status(200).json({ result });
}

async function updateCon(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await MOLITCON.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await MOLITCON.create(req.body);
    } else {
        await MOLITCON.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeCon(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await MOLITCON.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllGen(req, res){
    const result = await MOLITGEN.findAll();
    res.status(200).json({ result });
}

async function updateGen(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await MOLITGEN.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await MOLITGEN.create(req.body);
    } else {
        await MOLITGEN.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeGen(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await MOLITGEN.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllCity, updateCity, removeCity,
    getAllLand, updateLand, removeLand,
    getAllCon, updateCon, removeCon,
    getAllGen, updateGen, removeGen,
};