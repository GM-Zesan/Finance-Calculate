//this is function 
function myfinance(isExpense){
    const getIncome = document.getElementById('my-income');
    const myIncome = parseFloat(getIncome.value);
    const foodCost = parseFloat(document.getElementById('ex-food').value);
    const rentCost = parseFloat(document.getElementById('ex-rent').value);
    const clothCost = parseFloat(document.getElementById('ex-cloth').value);
    const errorMsgIncome = document.getElementById('error-msg-income');
    const errorMsgNull = document.getElementById('error-msg-null');
    const errorMsgNegative = document.getElementById('error-msg-expense');
    const errorMsgSave = document.getElementById('error-msg-save');
    const totalCost = foodCost+rentCost+clothCost;
    const myBalance = myIncome-totalCost;
    if(foodCost>=0 && rentCost>=0 && clothCost>=0){
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "none";
        if(myIncome > 0){
            errorMsgIncome.style.display = "none";
            if(isExpense == true){
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
                if(saveParcent>=0){
                    errorMsgSave.style.display = "none";
                    const mySavings = myIncome*(saveParcent/100);
                    if(myBalance>=mySavings){
                        document.getElementById('remain').innerText = myBalance-mySavings;
                        document.getElementById('my-savings').innerText = mySavings;
                    }
                    else{
                        document.getElementById('remain').innerText = myBalance;
                        document.getElementById('my-savings').innerText = "do not have sufficient Taka";
                    }
                }else{
                    errorMsgSave.style.display = "block";
                    document.getElementById('remain').innerText = myBalance;
                    document.getElementById('my-savings').innerText = "❌❌❌";
                }
            }
        }else{

            errorMsgIncome.style.display = "block";
            getIncome.value = '';
        }

    }
    else if(foodCost<0 || rentCost<0 || clothCost<0){
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "block";
    }
    else{
        errorMsgNull.style.display = "block";
        errorMsgNegative.style.display = "none";
    }
}

document.getElementById('calclute').addEventListener('click',function(){
    myfinance(true); 
})

document.getElementById('save').addEventListener('click',function(){
    myfinance(false);  
})