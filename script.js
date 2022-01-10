
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const special = "* $ & %"


function criptoIdMaker(num) {
    let criptoId = [];
    let alphaNumeric = numeric.concat(alpha.split(' ')).concat(special.split(' '));

    for (let i = 0; i < alphaNumeric.length; i++) {

        random = Math.floor(Math.random() * alphaNumeric.length);
        criptoId.push(alphaNumeric[random]);
    }
    return criptoId.join('');
}
let sifre = criptoIdMaker(15);
console.log(sifre);

///////////////////////////////////////////////////////////////////////////////////////////

function criptoArray(pass) {
    let arr = pass.split('');
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 1 === 0) {
            arr[i] += "-";
        }
    }
    return arr.join('');
}
console.log(criptoArray(sifre));

///////////////////////////////////////////////////////////////////////////////////////////

givenUnwanted = "3 , * , j , q , z"

function idControl(pass, unWantedArr) {
    let arr = pass.toString().split('');
    let unArr = unWantedArr.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < unArr.length; j++) {
            if (arr[i] === unArr[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr.join('');
}

console.log(idControl(sifre, givenUnwanted));
