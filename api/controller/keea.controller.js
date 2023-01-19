const { KEEAANN, KEEARAW } = require('../database');

async function getAllAnn(req, res){
    const result = await KEEAANN.findAll();
    res.status(200).json({ result });
}

async function updateAnn(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KEEAANN.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KEEAANN.create(req.body);
    } else {
        await KEEAANN.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeAnn(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KEEAANN.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllRaw(req, res){
    const result = await KEEARAW.findAll();
    res.status(200).json({ result });
}

async function updateRaw(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KEEARAW.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KEEARAW.create(req.body);
    } else {
        await KEEARAW.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeRaw(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KEEARAW.destroy({
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
    getAllRaw, updateRaw, removeRaw,
};