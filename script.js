let calcResult = document.getElementsByClassName('calculator-result')[0];
let sup = document.getElementsByClassName('sup')[0];
let operate = document.getElementsByClassName('operate')[0];
let sub = document.getElementsByClassName('sub')[0];
let digit = document.getElementsByClassName('digits');
let operator = document.getElementsByClassName('operator');
let clear = document.getElementsByClassName('all-clear')[0];


for (let index = 0; index < operator.length; index++) {
  operator[index].addEventListener('click', operateAction);
}

for (let index = 0; index < digit.length; index++) {
  digit[index].addEventListener('click', addDigit);
}    
function display(item) {
  calcResult.value = item;
}

function addDigit(obj) {
  value = obj.target.attributes.value.nodeValue;

  if(calcResult.innerHTML == '0'){
    reset()
  }

  if(operate.innerHTML == ''){
    sup.append(value);
  }else{
    sub.append(value);
  }
}

function operateAction(obj) {
    // make sure there is a sup
    if(sup.innerHTML == ''){
      return false;
    }

    // get operator value
    value = obj.target.attributes.value.nodeValue;
    if(value == "="){
      sum();
    }else{
      solve(value);
    }
}


function sum(){
  let sum, newSup, newSub;
  newSup = parseInt(sup.innerHTML);
  newSub = parseInt(sub.innerHTML);
  if(operate.innerHTML == ''){
    return false;
  }


  if(operate.innerHTML == '+')
   sum = newSup + newSub;
  else if(operate.innerHTML == '-')
   sum = newSup - newSub;
  else if(operate.innerHTML == '*')
    sum = newSup * newSub;
  else if(operate.innerHTML == '/')
     sum = newSup / newSub;
  else
    sum = 0;

  display(sum);
}

function solve(value){
  operate.innerHTML = value;
}

clear.addEventListener('click', reset);

function reset () {
  display(0);
  sub.innerHTML = '';
  sup.innerHTML = '';
  operate.innerHTML = '';
}
