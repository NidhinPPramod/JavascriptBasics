const header=document.querySelector(".show")

console.log(header)

const deviceWidth=window.matchMedia("(max-width:767px)")

window.addEventListener("resize",resize)

const resize=()=>{
    if (deviceWidth.matches){
        header.classList.add("hide")
    }else
    {
        header.classList.remove("hide")
    }
}

