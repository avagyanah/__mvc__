const { Controller } = require('./controller/Controller');
const { View } = require('./view/View');

function Facade() {
  // ...
}

Facade.prototype.initialize = function() {
  this.controller = new Controller(this);
  this.view = new View(this);

  this.initializeModel();
  this.initializeController();
  this.initializeView();
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
