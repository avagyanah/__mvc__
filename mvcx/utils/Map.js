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

Map.prototype.forEachKeys = function(callback) {
  this.keys.forEach(key => {
    callback(key);
  });
};

Map.prototype.forEachValues = function(callback) {
  this.values.forEach(value => {
    callback(value);
  });
};

Map.prototype.has = function(key) {
  return !!this[key];
};

Map.prototype.clear = function() {
  for (var key in this) if (this.hasOwnProperty(key)) delete this[key];
};

Object.defineProperty(Map.prototype, 'size', {
  get: function() {
    return this.keys.length;
  },
});

Object.defineProperty(Map.prototype, 'keys', {
  get: function() {
    const keys = [];
    for (var key in this) if (this.hasOwnProperty(key)) keys.push(key);
    return keys;
  },
});

Object.defineProperty(Map.prototype, 'values', {
  get: function() {
    const values = [];
    for (var key in this) if (this.hasOwnProperty(key)) values.push(this[key]);
    return values;
  },
});

exports.Map = Map;
