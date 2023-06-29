let input=document.querySelector(".input");
let Allbtn=document.querySelectorAll(".button button");
let error=document.querySelector(".error");
Allbtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let val=btn.value;
        if(val=="="){
            let ans=eval(input.value);
            input.value=ans;
            
            
        }
        else{
        input.value=input.value+val;
        }
    })
})
let clear=document.querySelector(".clear");
clear.addEventListener("click",(e)=>{
    input.value="";
})