const { GGNEWSEXT, GGNEWSFAC, GGNEWSSEM } = require('../database');

async function getAllExt(req, res){
    const result = await GGNEWSEXT.findAll();
    res.status(200).json({ result });
}

async function updateExt(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await GGNEWSEXT.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await GGNEWSEXT.create(req.body);
    } else {
        await GGNEWSEXT.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeExt(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await GGNEWSEXT.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllFac(req, res){
    const result = await GGNEWSFAC.findAll();
    res.status(200).json({ result });
}

async function updateFac(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await GGNEWSFAC.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await GGNEWSFAC.create(req.body);
    } else {
        await GGNEWSFAC.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeFac(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await GGNEWSFAC.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllSem(req, res){
    const result = await GGNEWSSEM.findAll();
    res.status(200).json({ result });
}

async function updateSem(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await GGNEWSSEM.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await GGNEWSSEM.create(req.body);
    } else {
        await GGNEWSSEM.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeSem(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await GGNEWSSEM.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllExt, updateExt, removeExt,
    getAllFac, updateFac, removeFac,
    getAllSem, updateSem, removeSem,
};