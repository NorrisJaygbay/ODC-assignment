// for nav one practice
var nav_hand=document.querySelector('.handcon');
var nav_hand2=document.querySelector('.handtwo');
var nav_hand1=document.querySelector('.handone');
var nav_hand3=document.querySelector('.handthree');
// var nav_barthree=document.querySelector('.one3');
// var nav_baronelist=document.querySelector('.navbaronelist');
nav_hand.addEventListener("click", ()=>{
    nav_hand2.classList.toggle("two");
    nav_hand1.classList.toggle("one");
    nav_hand3.classList.toggle("thr");
    // nav_barthree.classList.toggle("oneth");
    // nav_baronelist.classList.toggle("navbaronelist1");
})

// window.onclick=function(event){
//     var nav_barcont=document.querySelector('.navbaronelistcontrol');
//     if(event.target==nav_barcont){
//         nav_hand2.classList.toggle("hand2");
//         nav_hand1.classList.toggle("hand1");
//         nav_hand3.classList.toggle("hand3");
//         nav_baronelistcontrol.classList.toggle("navbaronelistcontrol1");
//         nav_baronelist.classList.toggle("navbaronelist1");
//     }
// }
// for nav one practice ends