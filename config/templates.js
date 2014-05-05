/*
 * akoenig.github.io
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var fs = require('fs');
var path = require('path');

var paths = require('./paths');

//
// Walking into the partials directory and load create
// an object which contains a pathmap with all partials:
// 
//     {
//         header: 'partials/header',
//         footer: 'partials/footer'
//     }
// 
// This object will be passed directly to the template engine.
// 
var partials = (function load () {
    var partials = {};

    fs.readdirSync(path.join(paths.templates, paths.partialsDir)).forEach(function (partial) {
        var name = path.basename(partial, path.extname(partial));

        partials[name] = path.join(paths.partialsDir, name);
    });

    return partials;
})();

module.exports = {
    engine: 'handlebars',
    partials: partials
};