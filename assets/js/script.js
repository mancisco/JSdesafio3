

function pintar(color='green',ele){
    ele.style.backgroundColor=color;
}
const ele=document.getElementById('ele1');
ele.addEventListener('click',()=>{
    pintar('yellow',ele);
});


function pintar(color='',ele){
    ele.style.backgroundColor=color;
}
let colorSeleccionado='';
document.addEventListener('keydown',(e)=>{
    if(e.key==='a'){
        colorSeleccionado='black';
        console.log(colorSeleccionado);
    }else if(e.key==='s'){
        colorSeleccionado='yellow';
        console.log(colorSeleccionado);
    }else if(e.key==='d'){
        colorSeleccionado='brown';
        console.log(colorSeleccionado);
    }
});
const div1=document.getElementById('div1');
div1.addEventListener('click',()=>{
    pintar(colorSeleccionado,div1);
});
const div2=document.getElementById('div2');
div2.addEventListener('click',()=>{
    pintar(colorSeleccionado,div2);
});
const div3=document.getElementById('div3');
div3.addEventListener('click',()=>{
    pintar(colorSeleccionado,div3);
});
const div4=document.getElementById('div4');
div4.addEventListener('click',()=>{
    pintar(colorSeleccionado,div4);
});























