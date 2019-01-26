//Массив
let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

//Методы массива filter и map
employers = employers.filter((name) => {
    return name.length > 0 && name.length != '';
}).map((item) => {
    return item.toLowerCase().trim();
});

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

//Деструктуризация объекта
const {cash, eu, eu: [SRL], rus} = sponsors;

//Параметр по умолчанию
const calcCash = (cash, own = 0) => {
    for (var i = 0; i < cash.length; i++) {
        own += +cash[i];
    }
    return own;
}

let money = calcCash(cash);

//Оператор Spread + Интерполяция
const makeBusiness = (cash, emp, arr1, arr2, director = 'Victor', owner = 'Sam') => {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: `);
//Spread развернуть массивы
    console.log(...arr1, ...arr2, 'unexpected sponsor');
    console.log(`Note. Be careful with ${SRL}. It's a huge risk.`);
}

makeBusiness(money, employers, eu, rus);