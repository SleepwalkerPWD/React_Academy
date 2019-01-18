"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _file_ = require("./file_1");

var _file_2 = require("./file_2");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//Оператор Spread + Интерполяция
var makeBusiness = function makeBusiness(cash, emp, arr1, arr2) {
  var _console;

  var director = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Victor';
  var owner = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'Sam';
  console.log("We have a business. Owner: ".concat(owner, ", director: ").concat(director, ". Our budget: ").concat(cash, ". And our employers: ").concat(emp));
  console.log("And we have a sponsors: "); //Spread развернуть массивы

  (_console = console).log.apply(_console, _toConsumableArray(arr1).concat(_toConsumableArray(arr2), ['unexpected sponsor']));

  console.log("Note. Be careful with ".concat(_file_2.SRL, ". It's a huge risk."));
};

makeBusiness(_file_2.money, _file_.employers, _file_2.eu, _file_2.rus);