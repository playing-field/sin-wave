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




/*function animation(){
    setInterval(animate,500);
}*/


var incX=30;


function animation() {
    var children = stage.children;

    children[0].style.left=children[0].style.left.split('px')[0]+incX+"px";
    /*for(var i=0;i<children.length;i++){
        console.log(children[i].style.left);

        children[].style.left=children[i].style.left.split('px')[0]+incX+"px";
        // children[i].style.top=children[i].style.top.split('px')[0]+incY+"px";

        console.log(children[i].style.left);
    }*/
}



var incX=0;

function animate(){
    var children = stage.children;
    for(var i=0;i<children.length;i++){
        var incY=Math.sin(ANGLE)*RADIUS;
        children[i].style.left=children[i].style.left.split('px')[0]+incX;
        children[i].style.top=children[i].style.top.split('px')[0]+incY;
        // console.log(parseInt(children[i].style.left.split('px')[0])+7);

        incX+=20;
        ANGLE+=Math.PI/6;
    }

}




