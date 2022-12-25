function sumInut(){
    const input = document.querySelector(".container-sum-input-form__input");
    const str = input.value;
    let array = new Array();
    let sum = 0;

    for(let i=0; i<str.length; i++){
        array[i] = str[i];
        if (!isNaN(Number(str[i]))){
            sum += Number(str[i]);
        }      
    }

    input.value = 'Массив: ' + array.sort() + '; сумма: ' + sum; 
}

function getFirstElement(){
    const array = ['js', 'css', 'html'];
    document.querySelector(".container-practice-task-1__result").innerHTML = "Результат: " + array[0];
}

function filterArray(){
    const array = [0, 1, false, 2, undefined, '', 3, null];
    let result =array.filter(element => typeof(element)== "number" && Number(element) > 0);
    document.querySelector(".container-practice-task-2__result").innerHTML = "Результат: " + result;
}

function findIndex(){
    const array = [[1,2], [1,2,3], [1,2,3,4]];

    let resultArray = new Array();


    for(let i=0; i < array.length; i++){
        if (array[i].length > 3){
            resultArray.push(i);
        }
    }

    let result = '';
    if (resultArray.length > 0){
        result = 'Результат: '+ resultArray;
    }
    else{
        result = 'Подходящего массива нет';
    }

    document.querySelector(".container-practice-task-3__result").innerHTML = result;
}



const sumButton = document.querySelector(".container-sum-input-form__button");
const firstElement = document.querySelector(".container-practice-task-1__button");
const filterArr= document.querySelector(".container-practice-task-2__button");
const findArray= document.querySelector(".container-practice-task-3__button");

sumButton.addEventListener("click", sumInut); 
firstElement.addEventListener("click", getFirstElement);
filterArr.addEventListener("click", filterArray)
findArray.addEventListener("click", findIndex)

