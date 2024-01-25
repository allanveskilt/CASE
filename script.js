console.log('Hello JS');
let num = 1;                            //muutuja, väärtuse andmine ei ole kohustuslik
var num2 = 2;                           //var liigub esimesele positsioonile blockis, ei kasutata üldjuhul
const pi = 3.141595;                    //konstant, väärtus on muutumatu, väärtuse andmine on kohustuslik
let text1 = 'hello world';
let text2 = "hello world";
let text3 = `hello world,
and pi is ${pi}`;                       //saab rida murda ja sisestada koode
console.log(text3);
let bool = true;                        //saab kasutada true/false
bool = false;
console.log(bool);
let undef;
console.log(undef);
let nil = null;
console.log(nil);
nil = undefined;
console.log(nil);
num = 1/0;
console.log(num);
num = Math.sqrt(-1);
console.log(num);
num = 0 * -1;
console.log(num);
num = 0.1 + 0.2;
console.log(num);
let array = [1,2,3,'sõna',true]
console.log(array);
console.log(array[0]);
let obj =                               //ei sobi osad tähemärgid
{
    name: 'Allan',
    age: 30,
    animals: ['Gaala','Barba','Triibu','Mustu','Pruunu'],
    'to-do list' : 'Finish school',
}
console.log(obj);
console.log(obj.age);
console.log(obj['to-do list']);
let func = function ()
{
    console.log('hello world, again :)')
}
function func2()
{
    console.log('hello world, not again :)')
}
let func3 = () => console.log('hello...');
let func4 = () =>
{
    console.log('hello world :)')
}