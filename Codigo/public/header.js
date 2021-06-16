const formButton = document.querySelector("nav.actions form")

const buttonHeader = formButton.querySelector(".button.exit");
const buttonId = buttonHeader.getAttribute("id");

addEventListener("onload", () =>{
    if(buttonId == ""){
        formButton.style.display = "none";
        
    }
    
})

