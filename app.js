//local dependency: npm i <packageName>
/**
 * global dependency: npm install -g <packageName>
 * package.json = manifest folder
 * manual approach = create package.json in root
 * npm init (step by step creates package.json)
 * npm init -y (all default properties)
 */

//npm install installs all of the dependencies needed to run folder.

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);