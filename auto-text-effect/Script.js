const containerE1 = document.querySelector(".container");
const careers = ["Student","Web Developer","Engineer"];
let careerIndex = 0;
let charecterIndex = 0;
updateText();

function updateText(){
    charecterIndex ++;
    containerE1.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === "E" ? "an":"a"} ${careers[careerIndex].slice(0,charecterIndex)}</h1>`;
   
    if(charecterIndex === careers[careerIndex].length){
        careerIndex ++;
        charecterIndex = 0;
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText,400);
}
