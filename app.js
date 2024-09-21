function inputValue(id){
    return parseFloat(document.getElementById(id).value);
}

function divInnertext(id){
    return parseFloat(document.getElementById(id).innerText)
}



//  calculate button clickEvent here //
let calculateBtn=document.getElementById("calculate");
calculateBtn.addEventListener("click",function(){

 let incomeValue=inputValue("income");
 let softwareValue=inputValue("software");
 let coursesValue=inputValue("courses");
 let internetValue=inputValue("internet");
 let totalExpenses=(softwareValue+coursesValue+internetValue);
 let balance=incomeValue-totalExpenses;
 if(incomeValue<totalExpenses){
    document.getElementById("logic-error").classList.remove("hidden")
 }
 else{
    document.getElementById("total-expenses").innerText=totalExpenses;
    document.getElementById("balance").innerText= balance;
   
   //  result section remove hidden here //
   document.getElementById("results").classList.remove("hidden");

   let dates = new Date().toLocaleDateString();
   let history=document.createElement("div");
   history.className="bg-white p-3 rounded-md border-l-2 border-indigo-500";
   history.innerHTML=`
     <P class="text-xs text-gray-500">${dates}</p>
     <p class="text-xs text-gray-500">Income $${incomeValue}</p>
     <p class="text-xs text-gray-500">Expenses$${totalExpenses}</p>
     <p class="text-xs text-gray-500">Balance$${balance}</p>
   `
 let historyContainer= document.getElementById("history-list");
  historyContainer.insertBefore(history,historyContainer.firstChild);
 }
 
})

///calculate savings button clickEvent here //

document.getElementById("calculate-savings")
.addEventListener('click',function(){
 let savingsValue= inputValue("savings");
 let savingsBalance=document.getElementById("balance").innerText;
 let parsentis=(savingsBalance /savingsValue);
 let totalParsentis=savingsBalance-parsentis
document.getElementById("savings-amount").innerText=parsentis;

document.getElementById("remaining-balance").innerText=totalParsentis;

})

// history-tab click function here //
let historybtn=document.getElementById("history-tab");
  historybtn.addEventListener("click",function(){
    historybtn.classList.add("bg-gradient-to-r","from-blue-500","to-purple-600","text-white")
    document.getElementById("assistant-tab").classList.remove("bg-gradient-to-r","from-blue-500","to-purple-600","text-white")
    document.getElementById("assistant-tab").classList.add("text-gray-500")
    document.getElementById("expense-form").classList.add("hidden")
    document.getElementById("history-section").classList.remove("hidden")
  })


// assistant-tab click function here //
let assistantbtn=document.getElementById("assistant-tab");
assistantbtn.addEventListener("click",function(){
    assistantbtn.classList.add("bg-gradient-to-r","from-blue-500","to-purple-600","text-white")
    document.getElementById("assistant-tab").classList.remove("text-gray-500")
    document.getElementById("history-tab").classList.remove("text-white","bg-gradient-to-r","from-blue-500","to-purple-600")
    document.getElementById("expense-form").classList.remove("hidden")
    document.getElementById("history-section").classList.add("hidden")
})
  