function myfinance(isExpenses){
    const getIncome = document.getElementById('my-income');
    const myIncome = parseFloat(getIncome.value);
    const foodCost = parseFloat(document.getElementById('ex-food').value);
    const rentCost = parseFloat(document.getElementById('ex-rent').value);
    const clothCost = parseFloat(document.getElementById('ex-cloth').value);
    const failSms = document.getElementById('notify-fail');
    const totalCost = foodCost+rentCost+clothCost;
    const myBalance = myIncome-totalCost;
    if(myIncome > 0){
        failSms.style.display = "none";
        if(isExpenses == true){
            if(myBalance>=0){
                document.getElementById('total-cost').innerText = totalCost;
                document.getElementById('balance').innerText = myBalance;
            }
            else{
                document.getElementById('total-cost').innerText = "Income is not sufficient";
                document.getElementById('balance').innerText = myIncome;
            }
        }
        else{
            const saveParcent = parseFloat(document.getElementById('save-percent').value);
            const mySavings = myIncome*(saveParcent/100);
            if(myBalance>=mySavings){
                document.getElementById('remain').innerText = myBalance-mySavings;
                document.getElementById('my-savings').innerText = mySavings;
            }
            else{
                document.getElementById('remain').innerText = myBalance;
                document.getElementById('my-savings').innerText = "do not have sufficient Taka";
            }
            
        }
    }
}

document.getElementById('calclute').addEventListener('click',function(){
    myfinance(true); 
})

document.getElementById('save').addEventListener('click',function(){
    myfinance(false);  
})