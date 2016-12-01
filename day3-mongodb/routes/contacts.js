var express = require('express');
var router = express.Router();


var Contact = require("../models/contact");


router.get("/", function(req, res) {
    var mongoQuery = {};

    Contact.find(mongoQuery, function(error, contacts) {
        return res.render("contacts", {contactItems: contacts});
    });
});


router.post("/", function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phonenumber = req.body.phonenumber;

    var newContact = new Contact({
        name: name,
        email: email,
        phonenumber: phonenumber
    });

    newContact.save(function(error) {
        return res.redirect("/contacts/");
    });
});


module.exports = router;
