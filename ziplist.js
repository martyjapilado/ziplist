const testList1 = ['a', 'b', 'c'];
const testList2 = ['1', '2', '3'];

function ziplist(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length || i < list2.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function ziplistTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(ziplistTheSimpleWay(testList1, testList2));
console.log(ziplist(testList1, testList2));
