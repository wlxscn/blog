// require.extensions['.scss'] = function() {
//   return null;
// };
// require.extensions['.css'] = function() {
//   return null;
// };
// require.extensions['.less'] = function() {
//   return null;
// };
// require.extensions['.png'] = function(module, file) {
//   return module._compile('module.exports = ""', file);
// };
// require.extensions['.svg'] = function() {
//   return null;
// }
// require.extensions['.jpeg'] = function() {
//     return null;
//   }
require( "babel-register")
// require('css-modules-require-hook/preset')
// const assethook = require('asset-require-hook')
// assethook({
//     extensions: ['png', 'jpeg']
// });
require( "./src/server" )