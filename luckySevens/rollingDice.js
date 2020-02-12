

function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["gambling"].elements.length; 
        loopCounter++) {
        if (document.forms["gambling"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["gambling"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}


function resetForm() {
    clearErrors();
    document.forms["gambling"]["startingBet"].value = "";
    
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["gambling"]["startingBet"].focus();
}





function rollDice() {
var startingBet = document.forms["gambling"]["startingBet"].value;
var bet = startingBet;
var counter = 0;
var betArray = new Array();

if (startingBet == "" || isNaN(startingBet)) {
    alert("The starting bet must be filled in with a dollar amount.");
    document.forms["gambling"]["startingBet"]
    .parentElement.className = "form-group has-error";
    document.forms["gambling"]["startingBet"].focus();
    return false;
    }
else if (startingBet <=0) {
    alert("The starting bet must be a dollar amount greater than zero");
    document.forms["gambling"]["startingBet"]
        .parentElement.className = "form-group has-error"
    document.forms["gambling"]["startingBet"].focus();
    return false;
   }
    
do
    {
        var diceOne = Math.floor(Math.random() * 6) + 1;
        var diceTwo = Math.floor(Math.random() * 6) + 1;
        var diceSum = diceOne + diceTwo;
        betArray.push(bet);
        if (diceSum == 7)
            {
                bet += 4
            }
        else {bet -= 1}
        counter++
    }while (bet > 0)
var arrayLength = betArray.length;
var peakBetAmount = Math.max.apply(Math, betArray);
var indexOfPeakAmount = betArray.indexOf(peakBetAmount);
if (indexOfPeakAmount < 1)
    {indexOfPeakAmount = 0}
var peakRollCount = indexOfPeakAmount + 1;
document.getElementById("results").style.display = "block";
document.getElementById("beginningBet").innerText = Number(startingBet);
document.getElementById("numberRolls").innerText = Number(counter);
document.getElementById("peakBet").innerText = peakBetAmount;
document.getElementById("peakAmountIndex").innerText = peakRollCount;
return false;
}

