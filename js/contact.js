let containerBox = document.querySelector(".containerBox");


window.addEventListener("resize" , () => {
    // phContainerBox();
    containerBox = document.querySelector(".containerBox");
    // wContainerBox ();
    
});

function wContainerBox (){
    if(document.documentElement.clientWidth < 882){
        // phoneNav.style="display:flex";
        containerBox.style="display:none";
    }else if (document.documentElement.clientWidth < 1200){
        // phoneNav.style="display:none";
        containerBox.style="margin-top:20vh";
    }else if (document.documentElement.clientWidth > 1200){
        // phoneNav.style="display:none";
        containerBox.style="margin-top:15vh";
        containerBox.style="display:flex";
    }
};


function phContainerBox(){

    if(document.documentElement.clientWidth < 882){
        // phoneNav.style="display:flex";
    }else{
        // phoneNav.style="display:none";
    }

};