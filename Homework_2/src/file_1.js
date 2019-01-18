"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employers = void 0;
//Массив
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']; //Метод массива filter

exports.employers = employers;
exports.employers = employers = employers.filter(function (name) {
  return name.length > 0 && name.length != '';
}); //Метод массива map

exports.employers = employers = employers.map(function (item) {
  return item.toLowerCase().trim();
});