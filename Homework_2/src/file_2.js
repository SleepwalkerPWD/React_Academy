"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SRL = exports.rus = exports.eu = exports.money = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
}; //Деструктуризация объекта

var cash = sponsors.cash,
    eu = sponsors.eu,
    _sponsors$eu = _slicedToArray(sponsors.eu, 1),
    SRL = _sponsors$eu[0],
    rus = sponsors.rus; //Параметр по умолчанию


exports.rus = rus;
exports.SRL = SRL;
exports.eu = eu;

var calcCash = function calcCash(cash) {
  var own = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  for (var i = 0; i < cash.length; i++) {
    own += +cash[i];
  }

  return own;
};

var money = calcCash(cash);
exports.money = money;