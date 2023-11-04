module.exports = app => {
    const users = require("../controller/user.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/", users.fetchAll);
    router.post("/register", users.create);
    router.post("/login", users.validateUser);

    app.use("/api/user", router);
};