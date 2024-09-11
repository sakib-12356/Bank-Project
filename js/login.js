document.getElementById("btn-login").addEventListener("click",()=>{
   
    const EmailInput=document.getElementById("email-input")
    const PasswordInput=document.getElementById("password-input")
   
    if(EmailInput.value=="rakib@gmail.com" && PasswordInput.value=="123456"){ 
      window.location.href="home.html"
    }
    else{
        alert("Apni Email Bule Gesen!!!")
    }
})


