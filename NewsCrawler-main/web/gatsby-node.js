const { getKld } = require("./src/kld-data-loader");
const { getDnews } = require("./src/dnews-data-loader");
const { getMolit } = require("./src/molit-data-loader");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  var dataSource = await getKld();

  createPage({
    path: "/",
    component: require.resolve("./src/templates/kld-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getDnews();

  createPage({
    path: "/dnews",
    component: require.resolve("./src/templates/dnews-single-page.js"),
    context: { dataSource },
  });

  var dataSource = await getMolit();

  createPage({
    path: "/molit",
    component: require.resolve("./src/templates/molit-single-page.js"),
    context: { dataSource },
  });
};