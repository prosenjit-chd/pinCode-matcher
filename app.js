function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + "";
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

document.getElementById("keypad").addEventListener("click", function(event){
    const number = (event.target.innerText);
    const calcInput = document.getElementById("typed-numbers");
    if (isNaN(number)){
        if(number == "C"){
            calcInput.value = "";
        }
    }
    else{
        const previousNumbers = calcInput.value;
        const newNumbers = previousNumbers + number;
        calcInput.value = newNumbers;
    }
})

function verifyPin(){
    const  generatedPin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const successNotification = document.getElementById("notify-success");
    const failedNotification = document.getElementById("notify-failed");
    if (generatedPin == typedNumbers){
       
        successNotification.style.display = "block";
        failedNotification.style.display = "none";
    }
    else{
       
        failedNotification.style.display = "block";
        successNotification.style.display = "none";
    }

}

const category='pen'; 
const performer = category+'-teller';
console.log(performer);