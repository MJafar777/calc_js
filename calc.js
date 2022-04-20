const input=document.querySelector('input');

function  keyPress(a){
     input.value=input.value+a;
}


function AllClear(){
    input.value='';
}

function del(){
    input.value=input.value.substring(0,input.value.length-1);
}


function  result(){
    input.value=eval(input.value);
}