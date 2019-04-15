// var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        res.render("index", {
          msg: "Welcome!",
         
        });
      });
    // Load add pet form
    app.get("/portfolio", function(req, res) {
        res.render("portfolio", {
         
        });
      });
  
    // Load add user form
    app.get("/contact", function(req, res) {
      res.render("contact");
    });
    app.get("/resume", function(req, res) {
      res.render("resume");
    });
  
    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
      res.render("404");
    });
  };
  