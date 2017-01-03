'use strict';

const router = require('express').Router();

module.exports = function ({app, controllers}) {
    const home = controllers.home;

    router
        .get('/random-fact', home.getHome);

    app.use('/home', router);
};