var bill = document.getElementById('bill-total');
var tip = document.getElementById('tip');
var amountOfPeople = document.querySelector('.js-number-of-people');
var totalPerPerson = document.querySelector('.per-person-amount');


// Calculate the split total
function calculateSplitTotal(){
    var tipPerPerson = ((Number(tip.value)/100) * Number(bill.value)) / Number(amountOfPeople.innerHTML);
    totalPerPerson.innerHTML = ((Number(bill.value) / Number(amountOfPeople.innerHTML)) + tipPerPerson).toFixed(2);
    console.log(totalPerPerson);
    if(isNaN(totalPerPerson.innerHTML) || totalPerPerson.innerHTML === "Infinity"){
        totalPerPerson.innerHTML = "0.00";
    }
}

// Add or subtract the amount of people splitting the bill
document.querySelector('.people-count').addEventListener('click', function(){
    if(event.target.tagName === "BUTTON"){
        if(event.target.innerHTML === '+'){
            amountOfPeople.innerHTML = Number(amountOfPeople.innerHTML) + 1;
        } else if(event.target.innerHTML === '-' && amountOfPeople.innerHTML > 0){
            amountOfPeople.innerHTML = Number(amountOfPeople.innerHTML) - 1;
        }
        calculateSplitTotal();
    }
});

// Re-calculates the tip after it is has been updated
tip.addEventListener('keyup', function(){
    tip = document.getElementById('tip');
    calculateSplitTotal();
});

// Re-calculates the bill after it has been updated
bill.addEventListener('keyup', function(){
    bill = document.getElementById('bill-total');
    calculateSplitTotal();
});