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
  KLDCON: require("./kld-con.model")(sequelize),
  KLDCM: require("./kld-cm.model")(sequelize),
  KLDTECH: require("./kld-tech.model")(sequelize),
  KLDSAFETY: require("./kld-safety.model")(sequelize),
  DNEWSSTD: require("./dnews-std.model")(sequelize),
  DNEWSENG: require("./dnews-eng.model")(sequelize),
  DNEWSTECH: require("./dnews-tech.model")(sequelize),
  DNEWSMAT: require("./dnews-mat.model")(sequelize),
  DNEWSSAFETY: require("./dnews-safety.model")(sequelize),
  MOLITCITY: require("./molit-city.model")(sequelize),
  MOLITLAND: require("./molit-land.model")(sequelize),
  MOLITCON: require("./molit-con.model")(sequelize),
  MOLITGEN: require("./molit-gen.model")(sequelize),
};
