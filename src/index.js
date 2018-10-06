const _ = {};

module.exports = _;

_.each = (collection, callback) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }

  return collection; // mostly useless, but standard, for chaining
};
