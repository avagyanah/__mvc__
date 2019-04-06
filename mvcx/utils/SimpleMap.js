function SimpleMap() {}

SimpleMap.prototype.delete = function(key) {
  delete this[key];
};

SimpleMap.prototype.set = function(key, value) {
  this[key] = value;
};

SimpleMap.prototype.get = function(key) {
  return this[key];
};

Object.defineProperty(SimpleMap.prototype, 'values', {
  get: function() {
    const values = [];
    for (var key in this) if (this.hasOwnProperty(key)) values.push(this[key]);
    return values;
  },
});

exports.SimpleMap = SimpleMap;
