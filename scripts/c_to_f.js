"use strict";

const txtInputVariable = document.getElementById("txtInput");
const txtOutputVariable = document.getElementById("txtOutput");
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
        let fahrenheit = valueAsNumber * (9/5) + 32;
        txtOutputVariable.value = fahrenheit.toFixed(0);

}
}