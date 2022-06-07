//Local Storage is low size inbuilt storage memory in a browser which ranges 10MB

//  localStorage.setItem("id","0")
// localStorage.setItem("name","Nidhin")
// localStorage.setItem("token","10")
//
// localStorage.removeItem("id")
//
// console.log(localStorage.key(1)) //returns the object in given index
//
// localStorage.clear() //given to clear the local storage..used when a user logout
//
//  document.writeln(localStorage.getItem("id"))
// document.writeln(localStorage.getItem("name"))


// const obj={
//     id:0,name:"Nidhin"
// }
//
// localStorage.setItem("data",JSON.stringify(obj))
//
// console.log(JSON.parse(localStorage.getItem("data")))
//
//


//LOGIN LOGOUT

const input=document.querySelector("input")
const loginBtn=document.querySelector("#login")
const logOutBtn=document.querySelector("#logout")
const h1=document.querySelector("h1");

loginBtn.onclick=()=>{
    if(input.value){
        localStorage.setItem("TOKEN",input.value)
        h1.innerText="Welcome"
    }
}

logOutBtn.onclick=()=>{
    localStorage.clear()
    localStorage.reload()
}
