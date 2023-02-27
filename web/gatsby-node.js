const { getKld } = require("./src/kld-data-loader");
const { getDnews } = require("./src/dnews-data-loader");
const { getMolit } = require("./src/molit-data-loader");
const { getKffa } = require("./src/kffa-data-loader");
const { getKeea } = require("./src/keea-data-loader");
const { getKacem } = require("./src/kacem-data-loader");
const { getInsa } = require("./src/insa-data-loader");
const { getSaram } = require("./src/saram-data-loader");
const { getAbouthr } = require("./src/abouthr-data-loader");
const { getGgnews } = require("./src/ggnews-data-loader");
const { getKoita } = require("./src/koita-data-loader");
const { getCad } = require("./src/cad-data-loader");
const { getRocm } = require("./src/rocm-data-loader");
const { getKcnet } = require("./src/kcnet-data-loader");
const { getProp } = require("./src/prop-data-loader");
const { getKosha } = require("./src/kosha-data-loader");
const { getPolicy } = require("./src/policy-data-loader");
const { getAnc } = require("./src/anc-data-loader");
const { getFire } = require("./src/fire-data-loader");
const { getLawmk } = require("./src/lawmk-data-loader");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  var dataSource = await getKoita();

  createPage({
    path: "/newscrawler/koita",
    component: require.resolve("./src/templates/koita-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getCad();

  createPage({
    path: "/newscrawler/cad",
    component: require.resolve("./src/templates/cad-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getRocm();

  createPage({
    path: "/newscrawler/rocm",
    component: require.resolve("./src/templates/rocm-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKcnet();

  createPage({
    path: "/newscrawler/kcnet",
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
    path: "/newscrawler/dnews",
    component: require.resolve("./src/templates/dnews-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getMolit();

  createPage({
    path: "/newscrawler/molit",
    component: require.resolve("./src/templates/molit-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKffa();

  createPage({
    path: "/newscrawler/kffa",
    component: require.resolve("./src/templates/kffa-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKeea();

  createPage({
    path: "/newscrawler/keea",
    component: require.resolve("./src/templates/keea-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKacem();

  createPage({
    path: "/newscrawler/kacem",
    component: require.resolve("./src/templates/kacem-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getGgnews();
  
  createPage({
    path: "/newscrawler/ggnews",
    component: require.resolve("./src/templates/ggnews-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getInsa();

  createPage({
    path: "/newscrawler/insa",
    component: require.resolve("./src/templates/insa-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getSaram();

  createPage({
    path: "/newscrawler/saram",
    component: require.resolve("./src/templates/saram-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getAbouthr();

  createPage({
    path: "/newscrawler/abouthr",
    component: require.resolve("./src/templates/abouthr-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getPolicy();

  createPage({
    path: "/newscrawler/poicy",
    component: require.resolve("./src/templates/policy-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getProp();

  createPage({
    path: "/newscrawler/prop",
    component: require.resolve("./src/templates/prop-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getKosha();

  createPage({
    path: "/newscrawler/kosha",
    component: require.resolve("./src/templates/kosha-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getAnc();

  createPage({
    path: "/newscrawler/anc",
    component: require.resolve("./src/templates/anc-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getFire();

  createPage({
    path: "/newscrawler/fire",
    component: require.resolve("./src/templates/fire-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getLawmk();

  createPage({
    path: "/newscrawler/lawmk",
    component: require.resolve("./src/templates/lawmk-single-page.js"),
    context: { dataSource },
  });
};