const _ = require("../lib").default;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const obj = {
  name: "Bob",
  age: 24,
  phone: null,
  email: "bob@example.com"
};

describe("lowbar helper methods", () => {
  //
  describe("each", () => {
    //
    it("should iterate over all ARRAY members", () => {
      const results = [];
      _.each(numbers, n => results.push(n));
      expect(results).toEqual(numbers);
    });

    it("should iterate over all OBJECT members", () => {
      let str = "";

      _.each(obj, item => {
        str += item ? item.toString() : "";
      });

      const expected = Object.values(obj).join("");
      expect(str).toEqual(expected);
    });
  });

  describe("map", () => {
    //
    it("should apply transform to ARRAY elements", () => {
      const transform = n => n * 2;
      const results = _.map(numbers, transform);
      expect(results).toEqual(numbers.map(transform));
    });

    it("should apply transform to OBJECT elements", () => {
      const transform = o => `${o || ""}`;
      const results = _.map(obj, transform).join("");
      const expected = Object.values(obj).join("");

      expect(results).toEqual(expected);
    });
  });

  describe("filter", () => {
    //
    it("should return specified subset of ARRAY elements", () => {
      const isEven = n => n % 2 == 0;
      const results = _.filter(numbers, isEven);
      expect(results).toEqual(numbers.filter(isEven));
    });

    it("should return specified subset of OBJECT values", () => {
      const isNumber = item => typeof item === "number";
      const results = _.filter(obj, isNumber);
      expect(results).toEqual([obj.age]);
    });
  });

  describe("reduce", () => {
    //
    const reducer = (total, n) => n + total;

    it("should reduce ARRAY elements to a single result", () => {
      const sum = _.reduce(numbers, reducer);
      expect(sum).toEqual(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9);
    });

    it("should incorporate initial starting value", () => {
      const sum = _.reduce(numbers, reducer, 5);
      expect(sum).toEqual(5 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9);
    });
  });
});
