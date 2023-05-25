//У вас есть массив строк 
//1 ваше задача - вывести в консоль каждую строку, но отрезав слово "план-". т е должны быть только цифры
const strings = ["plan-0", "plan-1", "plan-2"];

function showResult(strings) {
    console.log(strings.map(element => element.slice(5)
    ))
}
showResult(strings);
//2 ваша задача - вывести в консоль цифру от названия плана, если она совпадает с переменной currentPlan
let currentPlan = 1;
let newStrings;

//т е выведется только цифра 1, потому что в "plan-1" цифра 1 совпадает с currentPlan
function showOne(strings) {
    newStrings = strings.map(element => element.slice(5))
    let newNumbers = newStrings.map(Number);
    // console.log(newNumbers);
    console.log(newNumbers.filter(element => element === currentPlan));
}
showOne(strings);
//3 ваша задача - вывести в консоль цифру от названия плана, если она совпадает с переменной, которую принимает функция
let newSuperStrings;
function checkPlanName(number) {
    newSuperStrings = strings.map(element => element.slice(5))
    let newNumbers = newSuperStrings.map(Number);
    console.log(newNumbers.filter(element => element === number))
}
checkPlanName(0); //выведет 0
checkPlanName(1);  //выведет 1
checkPlanName(2);  // выведет 2