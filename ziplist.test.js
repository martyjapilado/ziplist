/* eslint-env mocha, chai */
/* global ziplistTheSimpleWay, ziplist, chai */

describe('ZipList', function () {
  const testList1 = ['a', 'b', 'c'];
  const testList2 = ['1', '2', '3'];
  const resultingList = ['a', '1', 'b', '2', 'c', '3'];
  describe('ziplistTheSimpleWay()', function () {
    it('should return array with elements \'a\', \'1\', \'b\', \'2\', \'c\', \'3\' for resultingList', function () {
      chai.expect(ziplistTheSimpleWay(testList1, testList2)).to.eql(resultingList);
    });
  });
  describe('ziplist()', function () {
    it('should return array with elements \'a\', \'1\', \'b\', \'2\', \'c\', \'3\' for resultingList', function () {
      chai.expect(ziplist(testList1, testList2)).to.eql(resultingList);
    });
  });
});
