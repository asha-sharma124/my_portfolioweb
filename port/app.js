(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();






// const sections=document.querySelectorAll('.section');
// const sectbtns=document.querySelectorAll('.controls');
// const sectbtn=document.querySelectorAll('.control');

// const allsections=document.querySelectorAll('.main-content');




// function pagetransition(){
//     for(let i=0;i<sectbtn.length;i++){
//         sectbtn[i].addEventListener('click',function(){
//             let currentbtn=document.querySelectorAll('.active-btn');
//             currentbtn[0].className=currentbtn[0].className.replace('active-btn','');
//             this.className+=' active-btn';})}}
    
        
        
        
        
// pagetransition();