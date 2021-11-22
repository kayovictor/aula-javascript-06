//01
var meuNome = 'Aieychan Karoline ';
var minhaIdade = 20;
minhaIdade.toString();
var concatenacaoDasVariaveis = meuNome + minhaIdade;
console.log(concatenacaoDasVariaveis);
console.log(concatenacaoDasVariaveis.length);

//02
var primeiroNumero = 17;
primeiroNumero.toString();
var segundoNumero = 28;
segundoNumero.toString();
var concatenacaoDasVariaveis01 = primeiroNumero + segundoNumero;
console.log(concatenacaoDasVariaveis01);

//Atividade de fixação02
//01
let txt = 'abcdefghijklm';
console.log(txt.indexOf('h')); 
let txt01 = 'Posso comer bananas o dia todo'
console.log(txt01.slice(12, 19));
let txt02 = 'Olá, mundo!';
console.log(txt02.replace('Olá', 'Bem vindo'));
console.log(txt02.toUpperCase());
console.log(txt02. toLowerCase());
console.log(txt01.length);
let src = 'Hello ';
let src01 = 'World!'
console.log(src.concat(src01));
const frutis = ['Banana', 'Orange', 'Apple', 'Kiwi'];
console.log(frutis.sort());
var posicaoDaFrutis = frutis.indexOf('Banana');
console.log(posicaoDaFrutis);
var removerFrutis = frutis.splice(1,2);
console.log(frutis);
const frutis01 = ['Banana', 'Orange', 'Apple'];
frutis01.push('Uva', 'Caju', 'Kiwi');
console.log(frutis01);
const frutis02 = ['Banana', 'Orange', 'Apple'];
frutis02.unshift('Pera' , 'Manga');
frutis02.pop();
console.log(frutis02);
