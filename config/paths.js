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

var path = require('path');

module.exports = {
    build: path.join('.', 'build'),
    templates: path.join(__dirname, '..', 'templates'),
    partialsDir: 'partials'
};