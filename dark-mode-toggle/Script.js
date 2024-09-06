const inputE1=document.querySelector(".input");
const bodyE1 = document.querySelector("body");
// const circleE1 = document.querySelector(".circle");
inputE1.checked=JSON.parse(localStorage.getItem("mode"));
updateBody() ;
function updateBody() {
    if(inputE1.checked) {
        bodyE1.style.background = "black";
    }
    else{
        bodyE1.style.background = "white";

    }
    
}

inputE1.addEventListener("input",()=>{
    updateBody();
    updateMode();
})

function updateMode() {
    localStorage.setItem("mode",JSON.stringify(inputE1.checked));
}

