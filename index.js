var firstModulePath = './first';
var secondModulePath = './second';

var first = require(firstModulePath);
var second = require(secondModulePath);

var Module = require('module');

var firstModule = Module._cache[require.resolve(firstModulePath)];
var secondModule = Module._cache[require.resolve(secondModulePath)];

console.log('first module ' + getChildrenInfoString(firstModule));
console.log('second module ' + getChildrenInfoString(secondModule));


function getChildrenInfoString(mod) {
  var childrenFileNames = mod.children.map(function(child) {
    return child.filename;
  });
  return 'has ' + mod.children.length + ' children: [' + childrenFileNames.join(',') + ']';
}