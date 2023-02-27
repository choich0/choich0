const { FIREFPN, FIRENFA, FIRELAW, FIREINFO } = require('../database');

async function getAllFpn(req, res){
    const result = await FIREFPN.findAll();
    res.status(200).json({ result });
}

async function updateFpn(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await FIREFPN.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await FIREFPN.create(req.body);
    } else {
        await FIREFPN.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeFpn(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await FIREFPN.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllNfa(req, res){
    const result = await FIRENFA.findAll();
    res.status(200).json({ result });
}

async function updateNfa(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await FIRENFA.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await FIRENFA.create(req.body);
    } else {
        await FIRENFA.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeNfa(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await FIRENFA.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllLaw(req, res){
    const result = await FIRELAW.findAll();
    res.status(200).json({ result });
}

async function updateLaw(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await FIRELAW.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await FIRELAW.create(req.body);
    } else {
        await FIRELAW.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeLaw(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await FIRELAW.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllInfo(req, res){
    const result = await FIREINFO.findAll();
    res.status(200).json({ result });
}

async function updateInfo(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await FIREINFO.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await FIREINFO.create(req.body);
    } else {
        await FIREINFO.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeInfo(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await FIREINFO.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllFpn, updateFpn, removeFpn,
    getAllNfa, updateNfa, removeNfa,
    getAllLaw, updateLaw, removeLaw,
    getAllInfo, updateInfo, removeInfo,
};