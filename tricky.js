if([])
    console.log("Hi");
else
    console.log("Bye");//hi

if([]==true)
    console.log("Hi");
else
    console.log("Bye");//bye

if([]==false)
    console.log("Hi");
else
    console.log("Bye");//hi

if([]===false)
    console.log("Hi");
else
    console.log("Bye");//bye

let obj={
    a:{
        b:undefined
    }
}
console.log(obj.a?.b?.c?.d??"Hello");//Hello

var abc=25;
if(function(){}){
    abc=abc+typeof f;
}
console.log(abc);