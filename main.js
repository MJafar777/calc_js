

document.onkeydown = move_car;


function  move_car(e){

    e = e  || window.event;

    console.log(e);
    console.log(e.keyCode,document.querySelector('img'));

    if(e.keyCode == 38){
         // up
         car_drive('up');
    }
    else if(e.keyCode == 40){
        /// down
        car_drive('down')
    }
    else if(e.keyCode == 39){
        // right
        car_drive('right')
    }
    else if(e.keyCode== 37){
        //left
        car_drive('left')
    }   
}

let x=0,y=0;

function car_drive(a){
    if(a==="up"){
       y=y-10;
       document.querySelector('img').style.transform=`translate(${x}px,${y}px)`;
       document.querySelector('img').style.transition="1s";
    }
    else if(a==='down'){
        y=y+10;
        document.querySelector('img').style.transform=`translate(${x}px,${y}px) rotate(180deg)`;
       document.querySelector('img').style.transition="1s";
    }
    else if(a==="left"){
        x=x-10;
        document.querySelector('img').style.transform=`translate(${x}px,${y}px) rotate(-90deg)`;
       document.querySelector('img').style.transition="1s";
    }
    else if(a==="right"){
        x=x+10;
        document.querySelector('img').style.transform=`translate(${x}px,${y}px) rotate(90deg)`;
       document.querySelector('img').style.transition="1s";
    }
}





// function return_charCode(e){
//     e = e || window.event;
//     console.log(e.keyCode);
// }

// document.onkeydown=return_charCode;