const { KOITANOT } = require('../database');

async function getAllNot(req, res){
    const result = await KOITANOT.findAll();
    res.status(200).json({ result });
}

async function updateNot(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await KOITANOT.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await KOITANOT.create(req.body);
    } else {
        await KOITANOT.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeNot(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await KOITANOT.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllNot,
    updateNot,
    removeNot,
};