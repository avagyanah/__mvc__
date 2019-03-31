function SimpleMap() {}

SimpleMap.prototype.set = function(key, value) {
  this[key] = value;
};

SimpleMap.prototype.get = function(key) {
  return this[key];
};

exports.SimpleMap = SimpleMap;
