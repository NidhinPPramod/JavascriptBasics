var Person={name:"Nidhin",age:12,place:"Ernakulam",display: function (){
    console.log(this.name)
        var name="Pramod"
        console.log(name)
    }}

Person.displayAge=function()
{
   console.log(this.age)
}
for(x in Person) {
    console.log(Person[x])
}

console.log(Person.displayAge())
