var read=require('readline-sync')

var a=read.question('Enter the first number')
var b=read.question('Enter the second number')

if(a>b) {
    console.log(a + 'Is greater')
}
else if(a===b) {
    console.log('Both are equal')
}
else
{
    console.log(b + 'Is greater')
}
