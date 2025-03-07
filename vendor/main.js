const nav = document.querySelector(".navbar")


window.addEventListener("scroll",()=>{

    if(window.scrollY>=70){
     nav.style.cssText = "transition:0.5s ease-in-out;z-index:5;background-color:white;box-shadow:5px 5px 20px #000"
    }
    else{
        nav.style.cssText="transition:0.5s ease-in-out"
    }
})