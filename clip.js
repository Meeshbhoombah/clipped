#!/usr/bin/env node
'use strict';

const cli = require('yargs');


/***** default *****/
if (cli.argv._[0] == null) {
    cli.showHelp();
/***** <profile-url> *****/
} else {
    console.log(cli.argv._);
}

/***** -h, --help *****/
cli
    .usage('Usage: $0 <command> [options]')
    .help('h')
    .alias('h', 'help').argv

/***** init (-wt, --with-token <token>) *****/

/***** browse (<user>) *****/

