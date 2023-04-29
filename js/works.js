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



let option1 = document.querySelector(".option1");
let optionContent = document.querySelector(".optionContent");
let optionP = document.querySelector(".optionP");
let tag = document.querySelectorAll(".tag");
let tagA = document.querySelector(".tagA");
let tagB = document.querySelector(".tagB");
let rowImage = document.querySelector(".rowImage");
let seachObjArr =[];
let optionPHtml ="";
let optionHtml = "";
let rowHtml = "";
console.log(tag);
//


let imageData = {

        "街景":[
            
            {
                title:"1-1",
                url:"image/1-1.jpg"
                
            },
            {
                title:"1-2",
                url:"image/1-2.jpg"
            },
            {
                title:"1-3",
                url:"image/1-3.jpg"
            },
            {
                title:"1-4",
                url:"image/1-4.jpg"
            },
            {
                title:"1-5",
                url:"image/1-5.jpg"
            },
            {
                title:"1-6",
                url:"image/1-6.jpg"
            },
            {
                title:"1-7",
                url:"image/1-7.jpg"
            },
            {
                title:"1-8",
                url:"image/1-8.jpg"
            },
            {
                title:"1-9",
                url:"image/1-9.jpg"
            },
            {
                title:"1-10",
                url:"image/1-10.jpg"
            },
            {
                title:"1-11",
                url:"image/1-11.jpg"
            },
            {
                title:"1-12",
                url:"image/1-12.jpg"
            },
            {
                title:"1-13",
                url:"image/1-13.jpg"
            },
            {
                title:"1-14",
                url:"image/1-14.jpg"
            },
            {
                title:"1-15",
                url:"image/1-15.jpg"
            },


        ],
        "櫻花":[
            {
                title:"2-1",
                url:"image/2-1.jpg"
            },
            {
                title:"2-2",
                url:"image/2-2.jpg"
            },
            {
                title:"2-3",
                url:"image/2-3.jpg"
            },
            {
                title:"2-4",
                url:"image/2-4.jpg"
            },
            {
                title:"2-5",
                url:"image/2-5.jpg"
            },
            {
                title:"2-6",
                url:"image/2-6.jpg"
            },
            {
                title:"2-7",
                url:"image/2-7.jpg"
            },
            {
                title:"2-8",
                url:"image/2-8.jpg"
            },
            {
                title:"2-9",
                url:"image/2-9.jpg"
            },
            {
                title:"2-10",
                url:"image/2-10.jpg"
            },
            {
                title:"2-11",
                url:"image/2-11.jpg"
            },
            {
                title:"2-12",
                url:"image/2-12.jpg"
            },
            {
                title:"2-13",
                url:"image/2-13.jpg"
            },
            {
                title:"2-14",
                url:"image/2-14.jpg"
            },
            {
                title:"2-15",
                url:"image/2-15.jpg"
            },
            {
                title:"2-16",
                url:"image/2-16.jpg"
            },
            {
                title:"2-17",
                url:"image/2-17.jpg"
            },
            {
                title:"2-18",
                url:"image/2-18.jpg"
            },
            {
                title:"2-19",
                url:"image/2-19.jpg"
            },
            {
                title:"2-20",
                url:"image/2-20.jpg"
            },
            {
                title:"2-21",
                url:"image/2-21.jpg"
            },
            {
                title:"2-22",
                url:"image/2-22.jpg"
            },
            {
                title:"2-23",
                url:"image/2-23.jpg"
            },


        ],        
        "人像":[
            {
                title:"3-1",
                url:"image/3-1.jpg"
            },
            {
                title:"3-2",
                url:"image/DSC_2969.jpg"
            }
        ],






}
console.log("最初" + imageData.街景);
domBegin(imageData.街景);


let imgClick = document.querySelectorAll(".img-fluid");//分頁照片


tag.forEach((e) => {
    // console.log(this);
    e.addEventListener("click",() =>{
        
        console.log(e);
        console.log(e.innerText);
        seachTag(e.innerText);
        optionChange(e.innerText);
        console.log("1"+tagA);
        
    });
});
function optionChange(e){
    let optionPHtml ="";
    let optionHtml = "";
    if (e == "櫻花"){
        // optionPHtml = `<p class="optionP tag" value=${e}>${e}</p>`;
        // optionHtml = `
        //     <p class="tag" value="人像">人像</p>
        //     <p class="tag" value="街景">街景</p>
        // `;
        // optionP.innerHTML =optionPHtml;
        // optionContent.innerHTML =optionHtml;
        optionP.innerText=e;
        tagA.innerText="人像";
        tagB.innerText="街景";
    }else if (e == "街景"){
        // optionPHtml = `<p class="optionP tag" value=${e}>${e}</p>`;
        // optionHtml = `
        //     <p class="tag" value="櫻花">櫻花</p>
        //     <p class="tag" value="人像">櫻花</p>
        // `;
        // optionP.innerHTML =optionPHtml;
        // optionContent.innerHTML =optionHtml;
        optionP.innerText=e;
        tagA.innerText="櫻花";
        tagB.innerText="人像";
    }else if (e == "人像"){
        // optionPHtml = `<p class="optionP tag" value=${e}>${e}</p>`;
        // optionHtml = `
        //     <p class="tag" value="街景">街景</p>
        //     <p class="tag" value="櫻花">櫻花</p>
        // `;
        // optionP.innerHTML =optionPHtml;
        // optionContent.innerHTML =optionHtml;
        optionP.innerText=e;
        tagA.innerText="街景";
        tagB.innerText="櫻花";
    };
    
}
function domRender(seachObjArr){
    console.log(seachObjArr);
    console.log(seachObjArr.length);
    // for(i = 0 ; i < seachObjArr.length; i++){
    //     console.log(i);
    // };
    seachObjArr.forEach((e) => {
        console.log(e.url);
        rowHtml =rowHtml + `                    
        <div class="col-12 d-flex justify-content-center imageBox">
            <div class="image img-1">
                <img class="img-fluid" src="${e.url}" alt="" >
            </div>
        </div>`;
        // console.log(rowHtml);
    });
    rowImage.innerHTML = rowHtml ;
}

function domBegin(e){
    e.forEach((e) => {
        console.log(e.url);
        rowHtml =rowHtml + `                    
        <div class="col-12 d-flex justify-content-center imageBox">
            <div class="image img-1">
               
                <img class="img-fluid" src="${e.url}" alt="" >
            </div>
        </div>`;
        // console.log(rowHtml);
    });
    rowImage.innerHTML = rowHtml ;
}

function seachTag(e){
    console.log(e);
    seachObjArr = imageData[e];
    rowHtml = "";
    console.log(seachObjArr);
    domRender(seachObjArr);
    imgClickOn();
};




function imgClickOn(){
    imgClick = document.querySelectorAll(".img-fluid");
    imgClick.forEach((e) => {
        e.addEventListener("click" , () => {
            console.log(e.src);
            window.open(e.src, 'new');
    
        })
    });
}
imgClickOn();












//video
// let videoContainer = document.querySelector("#videoContainer");
// const videoContainerInfo = window.videoContainer.getBoundingClientRect();
let windowHeight = window.innerHeight;
let imageBox = document.querySelectorAll(".imageBox");

console.log(imageBox.length);
let containerBoxh = imageBox.length * 603 + 91 + 48 ;
console.log(containerBoxh);


let homepageContainer6 = document.querySelector("#homepageContainer6");
const homepageContainer6Info = window.homepageContainer6.getBoundingClientRect();
let homepageContainer6H = homepageContainer6Info.height ;

let imageBox1 = imageBox[0];
console.log(imageBox1);
const imageBoxInfo = imageBox1.getBoundingClientRect();
let imageBoxH = imageBoxInfo.height ;

console.log(homepageContainer6H);
console.log(imageBoxH);

let all2 = homepageContainer6H + containerBoxh - windowHeight ;
let scorllPercent = this.scrollY / all2;
function calcH() {
    homepageContainer6H = homepageContainer6Info.height ;
    imageBoxH = imageBoxInfo.height ;
    imageBox = document.querySelectorAll(".imageBox");
    containerBoxh = imageBox.length * imageBoxH  + 48 + 200;
    all2 = /*homepageContainer6H +*/ containerBoxh - windowHeight ;
    scorllPercent = this.scrollY / all2;
    console.log("homepageContainer6H"+homepageContainer6H);
    console.log("imageBoxH"+imageBoxH);
    console.log(scorllPercent);
    return scorllPercent ;
}
calcH();


window.addEventListener("scroll" , () => {

    calcH();
    wdNav();
});
// let containerBox = document.querySelector(".containerBox");
// const containerBoxInfo = window.containerBox.getBoundingClientRect();
// let containerBoxH = containerBoxInfo.height ;
// console.log(containerBoxH);

//nav
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
console.log("calc" + calcH());
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
        if( calcH() > 1.07){
            navBar.classList.remove("navBarOpen");
        }else{
            navBar.classList.add("navBarOpen");
        }
    }else{
        navBar.classList.remove("navBarOpen");
    }

}

tag.forEach((e) => {
    // console.log(this);
    e.addEventListener("click",() =>{
        console.log("hkjijijji");
        
        calcH();
      
        
    });
});