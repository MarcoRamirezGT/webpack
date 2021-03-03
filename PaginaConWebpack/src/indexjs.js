import '../src/styles.scss';


var bodybg='#212121';
var red= 255;
var green= 255;
var blue=255;

window.onload=function(){
    document.body.style.backgroundColor=bodybg;
    var game_div = document.createElement("div");
    game_div.id="game_div";
    game_div.style.position="absolute";
    game_div.style.width="800px";
    game_div.style.height="800px";
   // game_div.style.border="3px solid red";
    game_div.style.top="20%";
    game_div.style.left="50%";
    game_div.style.zIndex="15";
    game_div.style.margin="-100px 0 0 -280px";
    document.body.appendChild(game_div);




    
    var h2=document.getElementById("h2");
    h2.id="h2";
    h2.style.color="transparent";
    h2.style.textShadow="0 0 5px rgba(0,0,0,1)";
    h2.style.textTransform="uppercase";
    h2.style.letterSpacing="2px";
    h2.style.fontSize="4em";
    h2.style.textAlign="center";
    h2.style.position="absolutive";
    h2.style.left="25%";
    h2.style.top="20%";
    h2.style.marginLeft="-180px";
    game_div.appendChild(h2);

    var p1=document.getElementById("p1");
    p1.id="p1";
    p1.style.color="transparent";
    p1.style.textShadow="0 0 5px rgba(0,0,0,1)";
    p1.style.textTransform="uppercase";
    p1.style.letterSpacing="2px";
    p1.style.fontSize="2em";
    p1.style.textAlign="center";
    p1.style.position="absolutive";
    p1.style.left="25%";
    p1.style.top="20%";
    p1.style.marginLeft="-180px";
    game_div.appendChild(p1);

    var p1=document.getElementById("p2");
    p2.id="p2";
    p2.style.textShadow="0 0 5px rgba(0,0,0,1)";
    p2.style.textTransform="uppercase";
    p2.style.color="transparent";
    p2.style.letterSpacing="2px";
    p2.style.fontSize="1em";
    p2.style.textAlign="center";
    p2.style.position="absolutive";
    p2.style.left="25%";
    p2.style.top="20%";
    p2.style.marginLeft="-180px";
    game_div.appendChild(p2);

    var li=document.getElementById("li");
    li.id="li";
    li.style.textShadow="0 0 5px rgba(0,0,0,1)";
    li.style.textTransform="uppercase";
    li.style.color="transparent";
    li.style.letterSpacing="2px";
    li.style.fontSize="2em";
    li.style.textAlign="center";
    li.style.position="absolutive";
    li.style.left="50%";
    li.style.top="20%";
    li.style.marginLeft="-200px";
    game_div.appendChild(li);

    var footer=document.getElementById("footer");
    footer.id="li";
    footer.style.textShadow="0 0 5px rgba(0,0,0,1)";
    footer.style.textTransform="uppercase";
    footer.style.color="transparent";
    footer.style.letterSpacing="2px";
    footer.style.fontSize="2em";
    footer.style.textAlign="center";
    footer.style.position="absolutive";
    footer.style.left="20%";
    footer.style.top="50%";
    footer.style.marginLeft="-180px";
    footer.style.marginTop="180px";
    game_div.appendChild(footer);




    

}

