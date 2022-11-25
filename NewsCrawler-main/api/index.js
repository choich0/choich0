const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./database");
const kldCon = require('./controller/kld-con.controller');
const kldCm = require('./controller/kld-cm.controller');
const kldTech = require('./controller/kld-tech.controller');
const kldSafety = require('./controller/kld-safety.controller');
const dnewsStd = require('./controller/dnews-std.controller');
const dnewsEng = require('./controller/dnews-eng.controller');
const dnewsTech = require('./controller/dnews-tech.controller');
const dnewsMat = require('./controller/dnews-mat.controller');
const dnewsSafety = require('./controller/dnews-safety.controller');
const molitCity = require('./controller/molit-city.controller');
const molitLand = require('./controller/molit-land.controller');
const molitCon = require('./controller/molit-con.controller');
const molitGen = require('./controller/molit-gen.controller');

async function launchServer() {
  const app = express();
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.json({ message: 'Start NewsCrawler!' });
  });

  app.get('/kldCon', kldCon.getAll);
  app.post('/kldCon', kldCon.update);
  app.delete('/kldCon', kldCon.remove);

  app.get('/kldCm', kldCm.getAll);
  app.post('/kldCm', kldCm.update);
  app.delete('/kldCm', kldCm.remove);

  app.get('/kldTech', kldTech.getAll);
  app.post('/kldTech', kldTech.update);
  app.delete('/kldTech', kldTech.remove);

  app.get('/kldSafety', kldSafety.getAll);
  app.post('/kldSafety', kldSafety.update);
  app.delete('/kldSafety', kldSafety.remove);

  app.get('/dnewsStd', dnewsStd.getAll);
  app.post('/dnewsStd', dnewsStd.update);
  app.delete('/dnewsStd', dnewsStd.remove);

  app.get('/dnewsEng', dnewsEng.getAll);
  app.post('/dnewsEng', dnewsEng.update);
  app.delete('/dnewsEng', dnewsEng.remove);

  app.get('/dnewsTech', dnewsTech.getAll);
  app.post('/dnewsTech', dnewsTech.update);
  app.delete('/dnewsTech', dnewsTech.remove);

  app.get('/dnewsMat', dnewsMat.getAll);
  app.post('/dnewsMat', dnewsMat.update);
  app.delete('/dnewsMat', dnewsMat.remove);

  app.get('/dnewsSafety', dnewsSafety.getAll);
  app.post('/dnewsSafety', dnewsSafety.update);
  app.delete('/dnewsSafety', dnewsSafety.remove);

  app.get('/molitCity', molitCity.getAll);
  app.post('/molitCity', molitCity.update);
  app.delete('/molitCity', molitCity.remove);
  
  app.get('/molitLand', molitLand.getAll);
  app.post('/molitLand', molitLand.update);
  app.delete('/molitLand', molitLand.remove);
  
  app.get('/molitCon', molitCon.getAll);
  app.post('/molitCon', molitCon.update);
  app.delete('/molitCon', molitCon.remove);

  app.get('/molitGen', molitGen.getAll);
  app.post('/molitGen', molitGen.update);
  app.delete('/molitGen', molitGen.remove);

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