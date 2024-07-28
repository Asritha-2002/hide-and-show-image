const image=document.getElementById("image")
const btn=document.getElementById("btn");
// document.addEventListener("click",event=>{
//     btn.textContent="show";
//     if(btn.textContent=='show'){
//         image.src='';
//         document.addEventListener("click",event=>{
//             btn.textContent="Hide";
//             image.src='./animal1.jpg';
            
//         })
//     }
// })
btn.addEventListener("click",event=>{
// btn.textContent="show";
// if(btn.textContent=='show'){
//           image.src='';
// }
// btn.addEventListener("click",event=>{
//                 btn.textContent="Hide";
//                 image.src='./animal1.jpg';
                
//             })
if(btn.textContent==="Hide"){
    image.src='';
    btn.textContent="show";
}else{
    image.src='./animal1.jpg';
    btn.textContent="Hide";
}
})