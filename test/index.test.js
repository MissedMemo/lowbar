const _ = require("../src");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("lowbar helper methods", () => {
  //
  describe("each", () => {
    //
    it("should iterate over all members", () => {
      const results = [];
      _.each(numbers, n => results.push(n));
      expect(results).toEqual(numbers);
    });
  });
});
