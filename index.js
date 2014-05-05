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

var metalsmith = require('metalsmith')(__dirname);
var rimraf = require('rimraf');

var plugins = require('bunchitos')('metalsmith-');
var config = require('./config/');

//
// Clean an old build.
//
rimraf.sync(config.paths.build);

metalsmith

    .use(plugins.metaobject(
        config.metaobject
    ))

    //
    // Stylesheet preprocessing (less)
    //
    .use(plugins.less(
        config.less
    ))

    //
    // Convert the markdown files to html
    //
    .use(plugins.markdown())

    .use(plugins.templates(
        config.templates
    ))

    //
    // Block all *.less files so that they won't appear
    // in the build directory.
    //
    .use(plugins.ignore(
        config.ignore
    ))

    .destination(config.paths.build)

    .build();