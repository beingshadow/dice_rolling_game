function shuffle()
{
    const img=document.getElementById("img1");
    let number=Math.floor(Math.random()*6)+1; 
    // img.setAttribute("src",`${number}.png`)
    img.setAttribute('src', `${number}` + '.png');
}
function anim()
{
setTimeout(shuffle,400)
const img=document.getElementById("img1");
img.setAttribute('src',"dice.gif");
}

function shuffle1()
{
    const img1=document.getElementById("img3");
    let number=Math.floor(Math.random()*6)+1; 
    // img.setAttribute("src",`${number}.png`)
    img1.setAttribute('src', `${number}` + '.png');
}
function anim1()
{
setTimeout(shuffle1,400)
const img1=document.getElementById("img3");
img1.setAttribute('src',"dice.gif");
}