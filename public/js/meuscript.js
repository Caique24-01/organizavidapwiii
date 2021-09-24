/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/meuscript.js ***!
  \***********************************/
alert("meu script");
var url = 'https://swapi.dev/api/people/1/?format=api';
fetch(url).then(function (response) {
  console.log(response);
});
/******/ })()
;