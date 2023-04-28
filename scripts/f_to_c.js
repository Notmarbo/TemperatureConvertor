"use strict";

let txtInputVariable = document.getElementById("txtInput");
let txtOutputVariable = document.getElementById("txtOutput");
const calculateBtnVariable = document.getElementById("calculateBtn");


window.onload = init;


function init(){
    calculateBtnVariable.onclick = onCalculateBtnClicked;
}

function onCalculateBtnClicked(){
    console.log("Clicked!!");


    let userTypedValue = txtInputVariable.value;
    let valueAsNumber = parseFloat(userTypedValue);

if(isNaN(valueAsNumber)){
    txtOutputVariable.value ="Invalid Input";
}else{
    let celcius = (valueAsNumber -32) * 5/9 ;
    txtOutputVariable.value = celcius.toFixed(0);

}
   
    

}