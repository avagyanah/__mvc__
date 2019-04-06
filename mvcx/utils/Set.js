// const { remove } = require('../array/remove');

function Set() {
  this.__entries__ = [];
}

Set.prototype.add = function(value) {
  const existingIndex = this.__entries__.indexOf(value);
  const isUnique = existingIndex === -1;

  if (isUnique) {
    this.__entries__.push(value);
  } else {
    this.__entries__[existingIndex] = value;
  }
};

// Set.prototype.delete = function(key) {
//   const index = this.__entries__.indexOf(key);
//   this.__entries__ = remove(this.__entries__, index);
// };

Set.prototype.clear = function() {
  this.__entries__.length = 0;
};

Set.prototype.forEach = function(callback) {
  this.__entries__.forEach(value => callback(value));
};

Set.prototype.has = function(key) {
  return this.__entries__.indexOf(key) !== -1;
};

Object.defineProperty(Set.prototype, 'size', {
  get: function() {
    return this.__entries__.length;
  },
});

Object.defineProperty(Set.prototype, 'values', {
  get: function() {
    return this.__entries__;
  },
});

exports.Set = Set;
