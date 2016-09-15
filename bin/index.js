#!/usr/bin/env node

var Bawnjorno = require('../lib/bawnjorno');
var b;
var minimistCfg = {
  default: {
    name: 'bawnjorno'
  }
};
var argv = require('minimist')(process.argv.slice(2), minimistCfg);

var opts = Object.assign(argv, {
  port: argv.port || argv.p || false,
  type: argv.type || argv.t || false,
  name: argv.n || argv.name
});

function shutdown() {
  if(b)
    b.unpublish();

  process.exit();
}

process.stdin.setEncoding('utf8');
process.stdin.pipe(process.stdout);

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

if(!opts.port || !opts.type) {
  console.error('Cannot broadcast without required options! [--port, --type]');
  process.exit();
}
else {
  b = Bawnjorno(opts);
  b.publish();
}
