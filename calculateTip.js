const bill = document.getElementById('bill-total');
const tip = document.getElementById('tip');
const amountOfPeople = document.querySelector('.js-number-of-people');
const totalPerPerson = document.querySelector('.per-person-amount');


// Calculate the split total
function calculateSplitTotal(){
    var tipPerPerson = ((Number(tip.value)/100) * Number(bill.value)) / Number(amountOfPeople.innerHTML);
    totalPerPerson.innerHTML = (Number(bill.value) / Number(amountOfPeople.innerHTML)) + tipPerPerson;
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



tip.addEventListener('change', function(){
    calculateSplitTotal()
});


