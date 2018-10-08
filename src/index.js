const _ = {};

export default _;

_.each = _.foreach = (collection, callback) => {
  /* cleaner to use 'for-of', but we need index/keys
    for (const element of collection) {
      callback(element);
    }
  */

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

_.map = _.collect = (collection, callback) => {
  const results = [];

  _.each(collection, (element, i) => {
    results.push(callback(element, i, collection));
  });
  return results;
};

_.filter = _.select = (collection, callback) => {
  const results = [];

  _.each(collection, (element, i) => {
    if (callback(element, i, collection)) {
      results.push(element);
    }
  });

  return results;
};

_.reduce = _.foldl = _.inject = (collection, callback, memo) => {
  _.each(collection, (value, i) => {
    if (memo === undefined) {
      memo = value;
    } else {
      memo = callback(memo, value, i, collection);
    }
  });
  return memo;
};
