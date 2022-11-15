const { NewsData } = require('../database');

async function getAll(req, res){
    const result = await NewsData.findAll();
    res.status(200).json({ result });
}

async function update(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await NewsData.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await NewsData.create(req.body);
    } else {
        await NewsData.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function remove(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await NewsData.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAll,
    update,
    remove,
};