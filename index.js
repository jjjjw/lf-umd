#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var mustache = require('mustache');

function usage() {
    console.log('Usage: lf-umd -n {packageName} -b {packageBuilt} -o {destination}');
}

// -h help
if (argv.h) {
    usage();
    process.exit();
}

var packageName = argv.n;
var packageBuilt = argv.b;
var destination = argv.o;

var start = mustache.render(fs.readFileSync('./wrap-start.frag', 'utf8'), { packageName: packageName });
var end = mustache.render(fs.readFileSync('./wrap-end.frag', 'utf8'), { packageName: packageName });

var concatenated = start + fs.readFileSync(packageBuilt, 'utf8') + end;
fs.writeFileSync(destination, concatenated);
