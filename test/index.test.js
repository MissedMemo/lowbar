const _ = require("../src");

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
    it("should iterate over all array members", () => {
      const results = [];
      _.each(numbers, n => results.push(n));
      expect(results).toEqual(numbers);
    });

    it("should iterate over all object members", () => {
      let str = "";

      _.each(obj, item => {
        str += item ? item.toString() : "";
      });

      const expected = Object.values(obj).join("");
      expect(str).toEqual(expected);
    });
  });

  /*
  describe("each", () => {
    //
    it("should iterate over all members", () => {
      const results = [];
      _.each(numbers, n => results.push(n));
      expect(results).toEqual(numbers);
    });
  });
  */
});
