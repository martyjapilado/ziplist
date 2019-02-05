const list1 = ['a', 'b', 'c'];
const list2 = ['1', '2', '3'];

function ziplist(list1, list2) {
  let result = [];
  for (let i = 0; i < list1.length || i < list2.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function ziplistTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(ziplist(list1, list2));
console.log(ziplistTheSimpleWay(list1, list2));

