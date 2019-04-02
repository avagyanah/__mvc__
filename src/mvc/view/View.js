const { SimpleMap } = require('../utils/SimpleMap');

function View(facade) {
  this.staticMediatorsMap = new SimpleMap();
  this.dynamicMediatorsMap = new SimpleMap();
  this.facade = facade;
}

View.prototype.registerStaticMediator = function(mediatorClass) {
  const mediatorInstance = new mediatorClass();
  this.staticMediatorsMap.set(mediatorClass.NAME, mediatorInstance);
  mediatorInstance.facade = this.facade;
  mediatorInstance.onRegister();
};

View.prototype.registerDynamicMediator = function(mediatorClass) {
  this.dynamicMediatorsMap.set(mediatorClass.NAME, mediatorClass);
};

exports.View = View;
