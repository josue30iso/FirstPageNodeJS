const express = require('express');
const router = express.Router();

// Routes
router.get("/", (request, response) => {

    response.render('index.html',
    
        { 'title' : "First NodeJS WebSite" }
    
    )

});

router.get("/contact", (request, response) => {

    response.render('contact.html',
    
        { 'title' : "About" }
    
    )

});

module.exports = router;