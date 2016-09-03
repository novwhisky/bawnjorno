var srv = require('http-server');
var bon = require('bonjour')();
var argv = require('minimist')(process.argv.slice(2));

var options = Object.assign(argv, {
  root: argv._[0],
  a: argv.a || '0.0.0.0',
  p: argv.p || 8080
});

var http = srv.createServer(options);

function cleanup() {
  bon.unpublishAll(function() {
    console.info('bonjour closed');
    bon.destroy();
    console.info('server closed');
    process.exit();
  });
}

http.listen(options.p, options.a, function() {

  process.on('SIGINT', function() {
    cleanup();
  });
  process.on('SIGTERM', function() {
    cleanup();
  });

  var svc = bon.publish({
    name: 'bonjour-http-server',
    type: 'http',
    port: options.p
  });

  svc.start();

  console.log('Serving ' + options.a + ':' + svc.port + ' to ' + svc.host);
});