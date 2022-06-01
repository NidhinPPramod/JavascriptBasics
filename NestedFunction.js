var num=10

function hey()
{
    num=30
    function  helo()
    {
        num=20
    }
    helo()

}

hey()
console.log(num)
