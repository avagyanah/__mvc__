const { SimpleMap } = require('../utils/SimpleMap');
function Controller(facade) {
  this.commandsMap = new SimpleMap();
  this.facade = facade;
}

Controller.prototype.registerCommand = function(key, command) {
  this.commandsMap.set(key, command);
};

Controller.prototype.executeCommand = function(key, body) {
  const command = this.commandsMap.get(key);
  command && command(this.facade, key, body);
};

exports.Controller = Controller;
