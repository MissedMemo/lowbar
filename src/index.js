const _ = {};

module.exports = _;

_.each = (collection, callback) => {
  for (let i = 0; i < collection.length; i++) {
    callback(collection[i], i, collection);
  }
};
