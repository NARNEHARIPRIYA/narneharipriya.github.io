function generate() {
    var num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
    let dice=document.getElementById("number");
    dice.innerHTML = num;
    var count =1;
    // whare is your Array.. u not using array  i didnt understood
    
    switch(count){
        case 1: if(num == 6){
            console.log(num);
            var img= '<img src="./Images/red pawn.png" id="img12" alt="red" style="width: 36px;">';
            console.log(img);
            arr[2].innerHTML += img;
            // document.getElementById("redpawn4").style.top="515px";
            // document.getElementById("redpawn4").style.left="200px";
        }
    }
}
 var c11=document.getElementsByClassName("c710");
 console.log(c11);
 var c2=document.getElementsByClassName("c2");
 var c3=document.getElementsByClassName("c3");
 var c4=document.getElementsByClassName("c4");
 var arr=[c11,c2,c3,c4];



