var chars=[];


for(var i=0;i<100;i++){
    var temp = document.createElement('span');
    temp.innerText=i;
    chars.push(temp);

}

var stage = document.getElementById('stage');

var pageYOffset=200;
var incrementX=0;

var ANGLE=0;
var RADIUS=100;



for (var i = 0; i < chars.length; i++) {
    var incrementY=Math.sin(ANGLE)*RADIUS;

    chars[i].setAttribute('style','position:absolute')
    chars[i].style.top=pageYOffset+incrementY+"px";
    chars[i].style.left=0+incrementX+"px";
    stage.append(chars[i]);
    incrementX+=20;
    ANGLE+=Math.PI/6;
}

function start(){
    setInterval(animation,600);
}




function animation() {

    var firstPosX=chars[0].style.left;
    var firstPosY=chars[0].style.top;

    for(var i=0;i<chars.length;i++){
        if((i+1)==chars.length){
            chars[i].style.left=firstPosX;
            chars[i].style.top=firstPosY;
        }else{
            chars[i].style.left=chars[i+1].style.left;
            chars[i].style.top=chars[i+1].style.top;
        }

    }

}








