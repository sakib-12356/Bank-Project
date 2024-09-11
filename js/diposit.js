document.getElementById("Deposite-btn").addEventListener("click",()=>{
   
    const dipositeInputStrig=document.getElementById("Deposite-input");
    const dipositeInputvalue=dipositeInputStrig.value;
    const dipositeInput=parseFloat(dipositeInputvalue)

    const oldDipositAmount=document.getElementById("diposit-amount");
    const dipositText=oldDipositAmount.innerText;
    const dipositAmountnNumber=parseFloat(dipositText)

    const totalAmount=dipositeInput + dipositAmountnNumber;
    oldDipositAmount.innerText=totalAmount;
    dipositeInputStrig.value="";


    const tatalAmount=document.getElementById("total-amount");
    const tatalAmountString=tatalAmount.innerText;
    const tatalAmountNumber=parseFloat(tatalAmountString)

    const newtatalAmount=dipositeInput + tatalAmountNumber;
    tatalAmount.innerText=newtatalAmount;
 
})

     //withdraw system

     document.getElementById("withdrow-btn").addEventListener("cilck",()=>{

        const withdrowInputString=document.getElementById("withdrow-input");
        const withdrowInputStringValue=withdrowInputString.value;
        const withdrowInputStringNumber=parseFloat(withdrowInputStringValue);
















        

    
    
    //  const withdrowAmount=document.getElementById("withdrow-amount")
    //  const withdrowAmountValue=withdrowAmount.innerText;
    //  const withdrowAmountNumber=parseFloat(withdrowAmountValue);
    
    //  const totalWithdrow=withdrowInputStringNumber + withdrowAmountNumber;
    //  withdrowAmount.innerText=totalWithdrow;


    //  const tatalAmount= document.getElementById("total-amount");
    //  const tatalAmountString=tatalAmount.innerText;
    //  const tatalAmountNumber=parseFloat(tatalAmountString);

    //  const newtatalAmount=tatalAmountNumber - withdrowInputStringNumber;
    //  tatalAmount.innerText=newtatalAmount;
    })
    console.log(withdrowInputStringNumber);