let navContent1 = document.querySelector("#navContent1");
let navBarInner = document.querySelector(".navBarInner");
let navBarInnerAnimaiton = document.querySelector(".navBarInnerAnimaiton");
let navBar = document.querySelector(".navBar");
let body = document.querySelector("body");
let navColor = document.querySelectorAll(".navColor");
// let navBar2= document.getElementsByClassName("navBar");
let nav =document.querySelector("nav");
let navAfter = window.getComputedStyle(nav,":after")//.getPropertyValue("background-color");
// let navAfter = window.getComputedStyle(navBar,"::after");
let InnerBarLine1 = document.querySelector("#InnerBarLine1");
let InnerBarLine2 = document.querySelector("#InnerBarLine2");
let phoneNavContent = document.querySelector("#phoneNavContent");
let phoneNav = document.querySelector("#phoneNav");


//
let windowHeight = window.innerHeight;
let content1 = document.querySelector("#content1");

const content1Info = window.content1.getBoundingClientRect();
let content1H = content1Info.height ;
// console.log(content1H);

let homepageContainer6 = document.querySelector("#homepageContainer6");
const homepageContainer6Info = window.homepageContainer6.getBoundingClientRect();
let homepageContainer6H = homepageContainer6Info.height ;

let all2 =  content1H - windowHeight ;
let scorllPercent = this.scrollY / all2;
function calcH() {
    homepageContainer6H = homepageContainer6Info.height ;
    content1H = content1Info.height ;
    // imageBox = document.querySelectorAll(".imageBox");
    // containerBoxh = imageBox.length * imageBoxH  + 48 + 200;
    all2 =  content1H - windowHeight ;
    scorllPercent = this.scrollY / all2;
    
    
    // console.log(scorllPercent);test
    return scorllPercent ;
}
window.addEventListener("scroll" , () => {

    calcH();
    wdNav();
});

phNav();
wdNav();
window.addEventListener("resize" , () => {
        phNav();
        calcH();
        wdNav();
});





function phNav(){

    if(document.documentElement.clientWidth < 1200){
        phoneNav.style="display:flex";
    }else{
        phoneNav.style="display:none";
    }

};
// console.log("calc" + calcH());
function wdNav(){
    
    // if(document.documentElement.clientWidth < 1200){
    //     navBar.classList.remove("navBarOpen");
    // }else{
    //     if( calcH() > 0.62){
    //         navBar.classList.remove("navBarOpen");
    //     }else{
    //         navBar.classList.add("navBarOpen");
    //     }
    //     // navBar.classList.add("navBarOpen");
        
    // }

    if(document.documentElement.clientWidth > 1200){
        // navBar.classList.add("navBarOpen");
        if( calcH() < -1.4){
            navBar.classList.remove("navBarOpen");
        }else{
            navBar.classList.add("navBarOpen");
        }
    }else{
        navBar.classList.remove("navBarOpen");
    }

}