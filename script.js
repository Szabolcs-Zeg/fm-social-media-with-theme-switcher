var Dmode = localStorage.getItem("darkmode");
document.getElementById("toggle").addEventListener("click", darkSwitch);
 
if (Dmode == "true"){
    document.getElementById("toggle").checked =true;
    enabledark()
}
 else {
    document.getElementById("toggle").checked =false;
   disabledark()
} 

function darkSwitch() {
    if (document.getElementById("toggle").checked ==true )
     {enabledark()}
     else {disabledark()}
}

function enabledark() {
    document.body.classList.add("darkmode");
    localStorage.setItem('darkmode', 'true')
}


function disabledark() {
    document.body.classList.remove("darkmode");
    localStorage.setItem('darkmode', 'false')
}






    
