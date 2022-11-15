const Sequelize = require("sequelize");

const config = {
  host: process.env.NEWSCRAWLER_MYSQL_HOST || "127.0.0.1",
  port: 3306,
  database: "newscrawling",
  user: "newscrawling_admin",
  password: process.env.NEWSCRAWLER_MYSQL_PASSWORD || "Wolf8431!!",
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: "mysql",
});

module.exports = {
  sequelize,
  NewsData: require("./newsList.model")(sequelize),
};
