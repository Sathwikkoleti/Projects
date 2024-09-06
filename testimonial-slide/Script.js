const testimonials = [
    {
        name:"Sathwik",
        photoUrl:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I love apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
    },
    {
        name:"Lokesh",
        photoUrl:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "lorem",
    },
    {
        name:"Kranthi",
        photoUrl:"https://media.licdn.com/dms/image/v2/D4D03AQHf2d4m9zgMpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667270216796?e=1730937600&v=beta&t=OpOAyzO1eu1C1udo8ircCep8r-qkdAhWbd_29e6klNk",
        text: "Neeku Enduku vyaa:(",
    },
];


const imgE1= document.querySelector("img");
const textE1= document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },2000)
}
