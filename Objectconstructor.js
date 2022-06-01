function Person(name,age,place)
{
    this.name=name;
    this.age=age;
    this.place=place;
    this.display=function ()
    {
        console.log("Name:"+this.name)
    }
}

var dilshd=new Person("Dilshad",12,"Calicut")

dilshd.display()
