// const { leo, john } = require('./firstModule')
// const sayHi = require('./firstModule-Function');
// const { newExport, hello } = require('./alterExport');
// // require('./7-mind-grenade');
// sayHi('hello');
// console.log(newExport)

// // sayHi("Leo");
// // sayHi(john);

const _ = require('lodash');
const items = [1,2,[5,5,[4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);