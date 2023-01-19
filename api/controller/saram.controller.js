const { SARAMPLAN, SARAMEVAL, SARAMGROUP, SARAMPOL, SARAMTREND } = require('../database');

async function getAllPlan(req, res){
    const result = await SARAMPLAN.findAll();
    res.status(200).json({ result });
}

async function updatePlan(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await SARAMPLAN.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await SARAMPLAN.create(req.body);
    } else {
        await SARAMPLAN.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removePlan(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await SARAMPLAN.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllEval(req, res){
    const result = await SARAMEVAL.findAll();
    res.status(200).json({ result });
}

async function updateEval(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await SARAMEVAL.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await SARAMEVAL.create(req.body);
    } else {
        await SARAMEVAL.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeEval(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await SARAMEVAL.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllGroup(req, res){
    const result = await SARAMGROUP.findAll();
    res.status(200).json({ result });
}

async function updateGroup(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await SARAMGROUP.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await SARAMGROUP.create(req.body);
    } else {
        await SARAMGROUP.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeGroup(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await SARAMGROUP.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllPol(req, res){
    const result = await SARAMPOL.findAll();
    res.status(200).json({ result });
}

async function updatePol(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await SARAMPOL.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await SARAMPOL.create(req.body);
    } else {
        await SARAMPOL.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removePol(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await SARAMPOL.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

async function getAllTrend(req, res){
    const result = await SARAMTREND.findAll();
    res.status(200).json({ result });
}

async function updateTrend(req, res){
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    const count = await SARAMTREND.count({ where: { nTitle, nDate, nLink }});

    if(count === 0) {
        await SARAMTREND.create(req.body);
    } else {
        await SARAMTREND.update(req.body, { where: { nTitle, nDate, nLink }});
    }

    res.status(200).json({ result: 'success' });
}

async function removeTrend(req, res) {
    const { nTitle, nDate, nLink } = req.body;
    if(!nTitle || !nDate || !nLink){
        res.status(400).json({ error: 'nTitle, nDate and nLink are required'});
        return;
    }

    await SARAMTREND.destroy({
        where: {
            nTitle,
            nDate,
            nLink,          
        },
    });

    res.status(200).json({ result: 'success' });
}

module.exports = {
    getAllPlan, updatePlan, removePlan,
    getAllEval, updateEval, removeEval,
    getAllGroup, updateGroup, removeGroup,
    getAllPol, updatePol, removePol,
    getAllTrend, updateTrend, removeTrend,
};