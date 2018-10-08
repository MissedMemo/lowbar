const _ = {};

export default _;

_.each = (collection, callback) => {
  //
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

_.map = (collection, callback) => {
  const results = [];

  _.each(collection, (element, i) => {
    results.push(callback(element, i, collection));
  });
  return results;
};

_.filter = (collection, callback) => {
  const results = [];

  _.each(collection, (element, i) => {
    if (callback(element, i, collection)) {
      results.push(element);
    }
  });

  return results;
};

_.reduce = (collection, callback, memo) => {
  _.each(collection, (value, i) => {
    if (memo === undefined) {
      memo = value;
    } else {
      memo = callback(memo, value, i, collection);
    }
  });
  return memo;
};
