// Створення регулярок у JS

const regex1 = /^test .*$/gi; // скорочена версія
const regex2 = new RegExp('^test', 'gi');

const res1 = regex1.exec('test string'); // масив з результатами
console.log(res1);
const isValid1 = regex1.test('asdsafdfd'); 
console.log(isValid1);

const str = 'test string';

const res2 = str.match(/str/);
console.log(res2);
const index = str.search(/str/);
console.log(index);