var firstModulePath = './first';
var secondModulePath = './second';

var first = require(firstModulePath);
var second = require(secondModulePath);

var Module = require('module');

var firstModule = Module._cache[require.resolve(firstModulePath)];
var secondModule = Module._cache[require.resolve(secondModulePath)];

console.log('first module ' + getChildrenInfoString(firstModule));
/* displays:
first module has 1 children: [path/child.js]
 */


console.log('second module ' + getChildrenInfoString(secondModule));
/* displays:
second module has 0 children: []
 */


function getChildrenInfoString(mod) {
  var childrenFileNames = mod.children.map(function(child) {
    return child.filename;
  });
  return 'has ' + mod.children.length + ' children: [' + childrenFileNames.join(',') + ']';
}