const userRoutes = require("./users-routes.js");
const homeRoutes = require("./home-routes.js");

module.exports = app => {
    app.use("/usuario",userRoutes);
    app.use("",homeRoutes);
};
