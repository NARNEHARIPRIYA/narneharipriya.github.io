function generate() {
    var num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    let dice=document.getElementById("number");
    dice.innerHTML = num;

    var count =1;
    switch(count){
        case 1: if(dice.innerHTML == 6){
            document.getElementById("redpawn4").style.top="515px";
            document.getElementById("redpawn4").style.left="200px";
        }
    }

}

var r1=document.getElementById("redpawn1");
var r2=document.getElementById("redpawn2");
var r3=document.getElementById("redpawn3");
var r4=document.getElementById("redpawn4");
function randomMove(Color, paw) {
    var a = document.getElementById("redpawn4");
    switch(Color){
        case 'red':
             a.style.top=(515-40)+"px"; a.style.left="200px";
    }
}