const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./database");
const newsListController = require('./controller/newsList.controller');

async function launchServer() {
  const app = express();
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.json({ message: 'Start NewsCrawler!' });
  });

  app.get('/newsList', newsListController.getAll);
  app.post('/newsList', newsListController.update);
  app.delete('/newsList', newsListController.remove);

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