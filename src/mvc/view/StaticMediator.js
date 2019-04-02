const { Mediator } = require('./Mediator');

function StaticMediator() {}

StaticMediator.prototype = Object.create(Mediator.prototype);

exports.StaticMediator = StaticMediator;
