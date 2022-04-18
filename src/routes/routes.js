module.exports = routes => {
    const controllers= require("../controllers/controllers");
   
    var router = require("express").Router();
    // Secret
    // Create a new secret
    router.post("/secret", controllers.createSecret);
    // Redirect hash
    router.get("/secret-url/:hash", controllers.getSecret);
    // all hash
    router.get("/secret", controllers.getAllSecrets);
    

    routes.use('/api', router);
  };