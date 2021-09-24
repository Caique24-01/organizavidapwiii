/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/meuscript.js ***!
  \***********************************/
alert("meu script");
var url = 'https://swapi.dev/api/people/';
fetch(url + '2').then(function (response) {
  return response.json();
}).then(function (data) {
  console.dir(data);
});
/******/ })()
;