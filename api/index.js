const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./database");
const kld = require('./controller/kld.controller');
const dnews = require('./controller/dnews.controller');
const molit = require('./controller/molit.controller');
const kffa = require('./controller/kffa.controller');
const keea = require('./controller/keea.controller');
const kacem = require('./controller/kacem.controller');
const insa = require('./controller/insa.controller');
const work = require('./controller/work.controller');
const saram = require('./controller/saram.controller');
const abouthr = require('./controller/abouthr.controller');
const ggnews = require('./controller/ggnews.controller');
const koita = require('./controller/koita.controller');
const kcnet = require('./controller/kcnet.controller');
const cad = require('./controller/cad.controller');
const rocm = require('./controller/rocm.controller');
const kosha = require('./controller/kosha.controller');

async function launchServer() {
  const app = express();
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.json({ message: 'Start NewsCrawler!' });
  });

  app.get('/kldCon', kld.getAllCon);
  app.post('/kldCon', kld.updateCon);
  app.delete('/kldCon', kld.removeCon);

  app.get('/kldCm', kld.getAllCm);
  app.post('/kldCm', kld.updateCm);
  app.delete('/kldCm', kld.removeCm);

  app.get('/kldTech', kld.getAllTech);
  app.post('/kldTech', kld.updateTech);
  app.delete('/kldTech', kld.removeTech);

  app.get('/kldSafety', kld.getAllSafety);
  app.post('/kldSafety', kld.updateSafety);
  app.delete('/kldSafety', kld.removeSafety);

  app.get('/dnewsStd', dnews.getAllStd);
  app.post('/dnewsStd', dnews.updateStd);
  app.delete('/dnewsStd', dnews.removeStd);

  app.get('/dnewsEng', dnews.getAllEng);
  app.post('/dnewsEng', dnews.updateEng);
  app.delete('/dnewsEng', dnews.removeEng);

  app.get('/dnewsTech', dnews.getAllTech);
  app.post('/dnewsTech', dnews.updateTech);
  app.delete('/dnewsTech', dnews.removeTech);

  app.get('/dnewsMat', dnews.getAllMat);
  app.post('/dnewsMat', dnews.updateMat);
  app.delete('/dnewsMat', dnews.removeMat);

  app.get('/dnewsSafety', dnews.getAllSafety);
  app.post('/dnewsSafety', dnews.updateSafety);
  app.delete('/dnewsSafety', dnews.removeSafety);

  app.get('/molitCity', molit.getAllCity);
  app.post('/molitCity', molit.updateCity);
  app.delete('/molitCity', molit.removeCity);
  
  app.get('/molitLand', molit.getAllLand);
  app.post('/molitLand', molit.updateLand);
  app.delete('/molitLand', molit.removeLand);
  
  app.get('/molitCon', molit.getAllCon);
  app.post('/molitCon', molit.updateCon);
  app.delete('/molitCon', molit.removeCon);

  app.get('/molitGen', molit.getAllGen);
  app.post('/molitGen', molit.updateGen);
  app.delete('/molitGen', molit.removeGen);

  app.get('/kffaAnn', kffa.getAllAnn);
  app.post('/kffaAnn', kffa.updateAnn);
  app.delete('/kffaAnn', kffa.removeAnn);

  app.get('/kffaNot', kffa.getAllNot);
  app.post('/kffaNot', kffa.updateNot);
  app.delete('/kffaNot', kffa.removeNot);

  app.get('/kffaRaw', kffa.getAllRaw);
  app.post('/kffaRaw', kffa.updateRaw);
  app.delete('/kffaRaw', kffa.removeRaw);

  app.get('/keeaAnn', keea.getAllAnn);
  app.post('/keeaAnn', keea.updateAnn);
  app.delete('/keeaAnn', keea.removeAnn);

  app.get('/keeaRaw', keea.getAllRaw);
  app.post('/keeaRaw', keea.updateRaw);
  app.delete('/keeaRaw', keea.removeRaw);

  app.get('/kacemAnn', kacem.getAll);
  app.post('/kacemAnn', kacem.update);
  app.delete('/kacemAnn', kacem.remove);

  app.get('/insaEdu', insa.getAllEdu);
  app.post('/insaEdu', insa.updateEdu);
  app.delete('/insaEdu', insa.removeEdu);

  app.get('/insaHr', insa.getAllHr);
  app.post('/insaHr', insa.updateHr);
  app.delete('/insaHr', insa.removeHr);

  app.get('/workRaw', work.getAllRaw);
  app.post('/workRaw', work.updateRaw);
  app.delete('/workRaw', work.removeRaw);

  app.get('/workPoly', work.getAllPoly);
  app.post('/workPoly', work.updatePoly);
  app.delete('/workPoly', work.removePoly);

  app.get('/workJud', work.getAllJud);
  app.post('/workJud', work.updateJud);
  app.delete('/workJud', work.removeJud);

  app.get('/saramPlan', saram.getAllPlan);
  app.post('/saramPlan', saram.updatePlan);
  app.delete('/saramPlan', saram.removePlan);

  app.get('/saramEval', saram.getAllEval);
  app.post('/saramEval', saram.updateEval);
  app.delete('/saramEval', saram.removeEval);

  app.get('/saramGroup', saram.getAllGroup);
  app.post('/saramGroup', saram.updateGroup);
  app.delete('/saramGroup', saram.removeGroup);

  app.get('/saramPol', saram.getAllPol);
  app.post('/saramPol', saram.updatePol);
  app.delete('/saramPol', saram.removePol);

  app.get('/saramTrend', saram.getAllTrend);
  app.post('/saramTrend', saram.updateTrend);
  app.delete('/saramTrend', saram.removeTrend);

  app.get('/abouthrMg', abouthr.getAllMg);
  app.post('/abouthrMg', abouthr.updateMg);
  app.delete('/abouthrMg', abouthr.removeMg);

  app.get('/abouthrPr', abouthr.getAllPr);
  app.post('/abouthrPr', abouthr.updatePr);
  app.delete('/abouthrPr', abouthr.removePr);

  app.get('/abouthrRc', abouthr.getAllRc);
  app.post('/abouthrRc', abouthr.updateRc);
  app.delete('/abouthrRc', abouthr.removeRc);

  app.get('/ggnewsExt', ggnews.getAllExt);
  app.post('/ggnewsExt', ggnews.updateExt);
  app.delete('/ggnewsExt', ggnews.removeExt);

  app.get('/ggnewsFac', ggnews.getAllFac);
  app.post('/ggnewsFac', ggnews.updateFac);
  app.delete('/ggnewsFac', ggnews.removeFac);

  app.get('/ggnewsSem', ggnews.getAllSem);
  app.post('/ggnewsSem', ggnews.updateSem);
  app.delete('/ggnewsSem', ggnews.removeSem);

  app.get('/koitaNot', koita.getAllNot);
  app.post('/koitaNot', koita.updateNot);
  app.delete('/koitaNot', koita.removeNot);

  app.get('/kcnetTech', kcnet.getAllTech);
  app.post('/kcnetTech', kcnet.updateTech);
  app.delete('/kcnetTech', kcnet.removeTech);

  app.get('/kcnetNot', kcnet.getAllNot);
  app.post('/kcnetNot', kcnet.updateNot);
  app.delete('/kcnetNot', kcnet.removeNot);

  app.get('/kcnetNews', kcnet.getAllNews);
  app.post('/kcnetNews', kcnet.updateNews);
  app.delete('/kcnetNews', kcnet.removeNews);

  app.get('/cadTv', cad.getAllTv);
  app.post('/cadTv', cad.updateTv);
  app.delete('/cadTv', cad.removeTv);

  app.get('/cadSpe', cad.getAllSpe);
  app.post('/cadSpe', cad.updateSpe);
  app.delete('/cadSpe', cad.removeSpe);

  app.get('/cadLec', cad.getAllLec);
  app.post('/cadLec', cad.updateLec);
  app.delete('/cadLec', cad.removeLec);

  app.get('/cadNews', cad.getAllNews);
  app.post('/cadNews', cad.updateNews);
  app.delete('/cadNews', cad.removeNews);

  app.get('/sRocm', rocm.getAllS);
  app.post('/sRocm', rocm.updateS);
  app.delete('/sRocm', rocm.removeS);

  app.get('/wRocm', rocm.getAllW);
  app.post('/wRocm', rocm.updateW);
  app.delete('/wRocm', rocm.removeW);

  app.get('/dRocm', rocm.getAllD);
  app.post('/dRocm', rocm.updateD);
  app.delete('/dRocm', rocm.removeD);

  app.get('/bRocm', rocm.getAllB);
  app.post('/bRocm', rocm.updateB);
  app.delete('/bRocm', rocm.removeB);

  app.get('/iRocm', rocm.getAllI);
  app.post('/iRocm', rocm.updateI);
  app.delete('/iRocm', rocm.removeI);

  app.get('/koshaNews', kosha.getAllNews);
  app.post('/koshaNews', kosha.updateNews);
  app.delete('/koshaNews', kosha.removeNews);

  app.get('/koshaCon', kosha.getAllCon);
  app.post('/koshaCon', kosha.updateCon);
  app.delete('/koshaCon', kosha.removeCon);

  app.get('/koshaGov', kosha.getAllGov);
  app.post('/koshaGov', kosha.updateGov);
  app.delete('/koshaGov', kosha.removeGov);

  try {
    await sequelize.sync();
    console.log('Database is ready!');
  } catch (error) {
    console.log('Unable to connect to the database:');
    console.log(error);
    process.exit(1);
  }

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

launchServer();