const { SimpleMap } = require('./utils/SimpleMap');
const { Controller } = require('./Controller');

function Facade() {
  this.commandsMap = new SimpleMap();
  this.staticMediatorsMap = new SimpleMap();
}

Object.defineProperty(Facade, 'getInstance', {
  value: function() {
    return this.instance || (this.instance = new this());
  },
});

Facade.prototype.initialize = function() {
  this.controller = new Controller(this);
  // this.view = new View(concreteFacadeKey)
  // this.view = new Proxy(concreteFacadeKey)

  this.initializeModel();
  this.initializeController();
  this.initializeView();
};

Facade.prototype.registerCommand = function(notificationName, command) {
  return this.controller.registerCommand(notificationName, command);
};

Facade.prototype.registerStaticMediator = function(mediatorClass) {
  this.staticMediatorsMap.set(mediatorClass.NAME, new mediatorClass());
};

Facade.prototype.registerDynamicMediator = function(mediatorClass) {
  this.staticMediatorsMap.set(mediatorClass.NAME, mediatorClass);
};

Facade.prototype.sendNotification = function(notificationName, body) {
  this.controller.executeCommand(notificationName, body);
};

Facade.prototype.initializeModel = function() {
  // ...
};

Facade.prototype.initializeController = function() {
  // ...
};

Facade.prototype.initializeView = function() {
  // ...
};

exports.Facade = Facade;
