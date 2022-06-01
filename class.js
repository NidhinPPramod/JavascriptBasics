
class Sam
{
    sample()
    {
        console.log("hello guys")
    }
}




//Inheritance super() is important beacause of constructor
class Hello extends Sam
{
    constructor(num1,num2) {
        super()
        this.num1=num1
        this.num2=num2
    }

    hello(){
        console.log("hello sum is"+(this.num1+this.num2))
    }
}

let h=new Hello(30,40)
h.hello()
h.sample()


