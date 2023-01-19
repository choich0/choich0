const { INSAEDU, INSAHR } = require('../database');

async function getAllEdu(req, res){
    const result = await INSAEDU.findAll();
    res.status(200).json({ result });
}

async function updateEdu(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await INSAEDU.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await INSAEDU.create(req.body);
    } else {
        await INSAEDU.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeEdu(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await INSAEDU.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllHr(req, res){
    const result = await INSAHR.findAll();
    res.status(200).json({ result });
}

async function updateHr(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await INSAHR.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await INSAHR.create(req.body);
    } else {
        await INSAHR.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeHr(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await INSAHR.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllEdu, updateEdu, removeEdu,
    getAllHr, updateHr, removeHr,
};