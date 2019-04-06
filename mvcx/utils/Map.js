function Map() {}

Map.prototype.delete = function(key) {
  delete this[key];
};

Map.prototype.set = function(key, value) {
  this[key] = value;
};

Map.prototype.get = function(key) {
  return this[key];
};

Map.prototype.has = function(key) {
  return !!this[key];
};

Object.defineProperty(Map.prototype, 'keys', {
  get: function() {
    const keys = [];
    for (var key in this) if (this.hasOwnProperty(key)) keys.push(key);
    return keys;
  },
});

exports.Map = Map;
