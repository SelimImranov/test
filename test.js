var boxes=document.querySelectorAll(".box")
var image=document.querySelector(".image")
boxes.forEach(element => {
    element.addEventListener("dragover",(e) => {
     e.preventDefault()
    });
    element.addEventListener("drop",() =>{
        element.appendChild(image)
    })
    
});
// for(var i=1; i<=100; i++){
//     console.log(`${i}`+"sorry babe")
// }