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


navContent1.addEventListener("mouseenter", () => {
    console.log("10");
    // navBarInner.style = "display:flex";
    navBarInner.classList.add("Open");
    // navBarInnerAnimaiton.style = "display:flex";

});
navBarInner.addEventListener("mouseenter", () => {
    console.log("10");
    navBarInner.classList.add("Open");
    // navBarInnerAnimaiton.style = "display:flex";
    
});


navContent1.addEventListener("mouseleave", () => {
    console.log("10");
    // navBarInner.style = "display:none";
    navBarInner.classList.remove("Open");
    // setTimeout(() => {
    //     navBarInnerAnimaiton.style = "display:none";
    // },1000);
});



navBarInner.addEventListener("mouseleave", () => {
    console.log("10");
    navBarInner.classList.remove("Open");
    // setTimeout(() => {
    //     navBarInnerAnimaiton.style = "display:none";
    // },1000);
});

var style=document.createElement('style');


let documentHeight = document.body.scrollHeight;
let windowHeight = window.innerHeight;
window.addEventListener("scroll", function(){
 let scorllPercent = this.scrollY / (documentHeight - windowHeight)
 console.log(scorllPercent);
});
//video
let videoContainer = document.querySelector("#videoContainer");
const videoContainerInfo = window.videoContainer.getBoundingClientRect();
//homepage1Container
let homepage1Container = document.querySelector("#homepage1Container");
const homepage1ContainerInfo = window.homepage1Container.getBoundingClientRect();
//homepageContainer2
let homepageContainer2 = document.querySelector("#homepageContainer2");
const homepageContainer2Info = window.homepageContainer2.getBoundingClientRect();
//homepageContainer3
let homepageContainer3 = document.querySelector("#homepageContainer3");
const homepageContainer3Info = window.homepageContainer3.getBoundingClientRect();
//homepageContainer4
let homepageContainer4 = document.querySelector("#homepageContainer4");
const homepageContainer4Info = window.homepageContainer4.getBoundingClientRect();
//homepageContainer5
let homepageContainer5 = document.querySelector("#homepageContainer5");
const homepageContainer5Info = window.homepageContainer5.getBoundingClientRect();
//homepageContainer5
let homepageContainer6 = document.querySelector("#homepageContainer6");
const homepageContainer6Info = window.homepageContainer6.getBoundingClientRect();

let videoH = videoContainerInfo.height ;
let homepage1H = homepage1ContainerInfo.height ;
let homepage2H = homepageContainer2Info.height ;
let homepage3H = homepageContainer3Info.height ;
let homepage4H = homepageContainer4Info.height ;
let homepage4W = homepageContainer4Info.width ;
let homepage5H = homepageContainer5Info.height ;
let homepage6H = homepageContainer6Info.height ;

let all = videoH + homepage1H + homepage2H + homepage3H + homepage4H + (homepage4W*4) + homepage5H + homepage6H - windowHeight ;

//
console.log("影片高" + videoContainerInfo.height);
console.log("容器1高" + homepage1ContainerInfo.height);
console.log("容器2高" + homepageContainer2Info.height);
console.log("容器3高" + homepageContainer3Info.height);
console.log("容器4高" + homepageContainer4Info.height);
console.log("容器4寬" + homepageContainer4Info.width);
console.log("容器5高" + homepageContainer5Info.height);
console.log("容器6高" + homepageContainer6Info.height); 
console.log("all : " + all)
console.log("整體高度:" + documentHeight);
console.log("視窗高度:" + windowHeight);

//
window.addEventListener("scroll", () => {
    // let scorllPercent = this.scrollY / (documentHeight - windowHeight)
    let scorllPercent = this.scrollY / (all + 200);
    console.log ("百分比" + scorllPercent);
    // console.log(scorllPercent);
    // console.log("整體高度:" + documentHeight);
    // console.log("視窗高度:" + windowHeight);
    // console.log(scrollY);
    if(document.documentElement.clientWidth < 1200){
         navBar.classList.remove("navBarOpen");
         if(scorllPercent <= 0.07){
            phoneNav.style="display:none";
         }else{
            phoneNav.style="display:flex";
         }
    }else{
        phoneNav.style="display:none";
        // phoneNavContent.style="display:none";
        if(scorllPercent <= 0.065){
            
            navBar.classList.remove("navBarOpen");
        }else if(scorllPercent >= 0.065 && scorllPercent <0.186){
            console.log("1");
            navBar.classList.add("navBarOpen");
        }else if(scorllPercent >= 0.186 && scorllPercent <0.837){
            console.log("2");
            navBar.classList.remove("navBarOpen");
        }else if(scorllPercent >= 0.837 && scorllPercent <0.96){
            console.log("3");
            navBar.classList.add("navBarOpen");
        }else if(scorllPercent >= 0.96){
            console.log("4");
            navBar.classList.remove("navBarOpen");
        }

        if(window.scrollY >= 2594 ){
            navBar.style="color:black";
            InnerBarLine1.style="background-color:black";
            InnerBarLine2.style="background-color:black";
            //
            style.innerHTML="body nav::after{background-color:black}";
            document.head.appendChild(style);
            //

        
            // navAfter = rgb(0, 0, 0);

            navColor.forEach((item) => {
                item.style="color:black";
            });
            // navAfter.style="color:black";
        }else {

            //
            style.innerHTML="body nav::after{background-color:white}";
            document.head.appendChild(style);
            //
            InnerBarLine1.style="background-color:white";
            InnerBarLine2.style="background-color:white";
            navBar.style="color:white";
            navColor.forEach((item) => {
                item.style="color:white";
            });
            // navAfter.style="color:white";
        }
    }
        




            

        



});

// window.addEventListener("scroll",() => {
//     // console.log(window.scrollY);
//     // console.log(document.body.clientWidth);
//     // console.log(window.scrollY / document.body.clientHeight);
//     // console.log(window.innerHeight);
//     if(document.body.clientWidth < 992){
//         if(window.scrollY <= (window.innerHeight-50)){
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= (window.innerHeight-50) && window.scrollY <1976){
//             console.log("1");
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= 1976 && window.scrollY <9376){
//             console.log("2");
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= 9376 && window.scrollY <10817){
//             console.log("3");
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= 10817){
//             console.log("4");
//             navBar.classList.remove("navBarOpen");
//         }
//     }else if(document.body.clientWidth >= 992 && document.body.clientWidth < 1200 ){
//         if(window.scrollY <= (window.innerHeight-50)){
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= (window.innerHeight-50) && window.scrollY <1976){
//             console.log("1");
//             navBar.classList.add("navBarOpen");
//         }else if(window.scrollY >= 1976 && window.scrollY <7228){
//             console.log("2");
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= 7228 && window.scrollY <9729){
//             console.log("3");
//             navBar.classList.add("navBarOpen");
//         }else if(window.scrollY >= 9729){
//             console.log("4");
//             navBar.classList.remove("navBarOpen");
//         }
//     }else if(document.body.clientWidth >= 1200 && document.body.clientWidth < 1519 ){
//         if(window.scrollY <= (window.innerHeight-50)){
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= (window.innerHeight-50) && window.scrollY <1976){
//             console.log("1");
//             navBar.classList.add("navBarOpen");
//         }else if(window.scrollY >= 1976 && window.scrollY <8596){
//             console.log("2");
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= 8596 && window.scrollY <9625){
//             console.log("3");
//             navBar.classList.add("navBarOpen");
//         }else if(window.scrollY >= 9625){
//             console.log("4");
//             navBar.classList.remove("navBarOpen");
//         }
//     }else if(document.body.clientWidth >= 1519 && window.scrollY < 1920){
//         if(window.scrollY <= (window.innerHeight-50)){
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= (window.innerHeight-50) && window.scrollY <1976){
//             console.log("1");
//             navBar.classList.add("navBarOpen");
//         }else if(window.scrollY >= 1976 && window.scrollY <9376){
//             console.log("2");
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= 9376 && window.scrollY <11065){
//             console.log("3");
//             navBar.classList.add("navBarOpen");
//         }else if(window.scrollY >= 11065){
//             console.log("4");
//             navBar.classList.remove("navBarOpen");
//         }
//     }else if(document.body.clientWidth >= 1920){
//         if(window.scrollY <= (window.innerHeight-50)){
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= (window.innerHeight-50) && window.scrollY <2099){
//             console.log("1");
//             navBar.classList.add("navBarOpen");
//         }else if(window.scrollY >= 2099 && window.scrollY <10899){
//             console.log("2");
//             navBar.classList.remove("navBarOpen");
//         }else if(window.scrollY >= 10899 && window.scrollY <13199){
//             console.log("3");
//             navBar.classList.add("navBarOpen");
//         }else if(window.scrollY >= 13199){
//             console.log("4");
//             navBar.classList.remove("navBarOpen");
//         }
//     }
//     // if(window.scrollY <= (window.innerHeight-50)){
//     //     navBar.classList.remove("navBarOpen");
//     // }else if(window.scrollY >= (window.innerHeight-50) && window.scrollY <1717){
//     //     console.log("1");
//     //     navBar.classList.add("navBarOpen");
//     // }else if(window.scrollY >= 1717 && window.scrollY <7752){
//     //     console.log("2");
//     //     navBar.classList.remove("navBarOpen");
//     // }else if(window.scrollY >= 7752 && window.scrollY <10817){
//     //     console.log("3");
//     //     navBar.classList.add("navBarOpen");
//     // }else if(window.scrollY >= 10817){
//     //     console.log("4");
//     //     navBar.classList.remove("navBarOpen");
//     // }


//     // console.log(body.scrollTop);
    






//     if(window.scrollY >= 2594 ){
//         navBar.style="color:black";
//         InnerBarLine1.style="background-color:black";
//         InnerBarLine2.style="background-color:black";
//         //
//         style.innerHTML="body nav::after{background-color:black}";
//         document.head.appendChild(style);
//         //

     
//         // navAfter = rgb(0, 0, 0);

//         navColor.forEach((item) => {
//             item.style="color:black";
//         });
//         // navAfter.style="color:black";
//     }else {

//         //
//         style.innerHTML="body nav::after{background-color:white}";
//         document.head.appendChild(style);
//         //
//         InnerBarLine1.style="background-color:white";
//         InnerBarLine2.style="background-color:white";
//         navBar.style="color:white";
//         navColor.forEach((item) => {
//             item.style="color:white";
//         });
//         // navAfter.style="color:white";
//     }
// });





// let documentHeight = document.body.scrollHeight;
// let windowHeight = window.innerHeight;
// window.addEventListener("scroll", function(){
//  let scorllPercent = this.scrollY / (documentHeight - windowHeight)
//  console.log(scorllPercent);
// });




let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});
// gsap.registerPlugin(ScrollTrigger);

// gsap.to("nav", {
//     scrollTrigger:{
//         trigger:"#homepage1Container",
//         start:"top 10%",
//         markers:true,
//         toggleActions:"restart pause reverse pause"
//     },
//     x:600,
//     duration:1
// })
