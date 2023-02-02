const { getKld } = require("./src/kld-data-loader");
const { getDnews } = require("./src/dnews-data-loader");
const { getMolit } = require("./src/molit-data-loader");
const { getKffa } = require("./src/kffa-data-loader");
const { getKeea } = require("./src/keea-data-loader");
const { getKacem } = require("./src/kacem-data-loader");
const { getInsa } = require("./src/insa-data-loader");
const { getWork } = require("./src/work-data-loader");
const { getSaram } = require("./src/saram-data-loader");
const { getAbouthr } = require("./src/abouthr-data-loader");
const { getGgnews } = require("./src/ggnews-data-loader");
const { getKoita } = require("./src/koita-data-loader");
const { getCad } = require("./src/cad-data-loader");
const { getRocm } = require("./src/rocm-data-loader");
const { getKcnet } = require("./src/kcnet-data-loader");
const { getKosha } = require("./src/kosha-data-loader");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  var dataSource = await getKoita();

  createPage({
    path: "/newscrawler/team0/koita",
    component: require.resolve("./src/templates/koita-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getCad();

  createPage({
    path: "/newscrawler/team0/cad",
    component: require.resolve("./src/templates/cad-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getRocm();

  createPage({
    path: "/newscrawler/team0/rocm",
    component: require.resolve("./src/templates/rocm-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKcnet();

  createPage({
    path: "/newscrawler/team0/kcnet",
    component: require.resolve("./src/templates/kcnet-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKld();

  createPage({
    path: "/newscrawler/",
    component: require.resolve("./src/templates/kld-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getDnews();

  createPage({
    path: "/newscrawler/team1/dnews",
    component: require.resolve("./src/templates/dnews-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getMolit();

  createPage({
    path: "/newscrawler/team1/molit",
    component: require.resolve("./src/templates/molit-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKffa();

  createPage({
    path: "/newscrawler/team2/kffa",
    component: require.resolve("./src/templates/kffa-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKeea();

  createPage({
    path: "/newscrawler/team2/keea",
    component: require.resolve("./src/templates/keea-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKacem();

  createPage({
    path: "/newscrawler/team2/kacem",
    component: require.resolve("./src/templates/kacem-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getGgnews();
  
  createPage({
    path: "/newscrawler/team3/ggnews",
    component: require.resolve("./src/templates/ggnews-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getInsa();

  createPage({
    path: "/newscrawler/team4/insa",
    component: require.resolve("./src/templates/insa-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getWork();

  createPage({
    path: "/newscrawler/team4/work",
    component: require.resolve("./src/templates/work-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getSaram();

  createPage({
    path: "/newscrawler/team4/saram",
    component: require.resolve("./src/templates/saram-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getAbouthr();

  createPage({
    path: "/newscrawler/team4/abouthr",
    component: require.resolve("./src/templates/abouthr-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKosha();

  createPage({
    path: "/newscrawler/team8/kosha",
    component: require.resolve("./src/templates/kosha-single-page.js"),
    context: { dataSource },
  });
};