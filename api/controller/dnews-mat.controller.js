const { DNEWSMAT } = require('../database');

async function getAll(req, res){
    const result = await DNEWSMAT.findAll();
    res.status(200).json({ result });
}

async function update(req, res){
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

async function remove(req, res) {
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

module.exports = {
    getAll,
    update,
    remove,
};