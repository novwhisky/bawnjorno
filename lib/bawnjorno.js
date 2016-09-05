var bonjour = require('bonjour')();

/**
 * Interface to bonjour's api
 * @param opts {object}
 * @param {string} opts.name
 * @param {string|number} opts.port
 * @param {string} opts.name
 * @constructor
 */
function Bawnjorno(opts) {
  if(!(this instanceof Bawnjorno)) {
    return new Bawnjorno(opts);
  }

  var svc = null;

  this.publish = function publish() {
    svc = bonjour.publish(opts);
    svc.start();

    console.log('Bawnjorno! Publishing service to ' + svc.host + ':' + svc.port +
      ' [name: \'' + opts.name + '\', type: ' + opts.type + ']');
  };

  this.unpublish = function unpublish() {
    if(svc && svc.unpublishAll) {
      svc.unpublishAll();
    }
    console.log('\r\nArreeverdurchee');
  };

  this.destroy = function destroy() {
    svc.destroy();
  }
}

module.exports = Bawnjorno;