const buttonRate = document.querySelector(".button.button-rating");

const game = document.querySelector(".modal-container .modal-content .header h3").textContent
const modalContainer = document.querySelector(".modal-container");
const modalContent = document.querySelector(".modal-content");
const stars = document.querySelectorAll(".modal-content .rating-area img");
const p = document.querySelector(".modal-content .rating-text");
const button = document.querySelector(".modal-content .footer button");



buttonRate.addEventListener("click",()=>{
    modalContainer.classList.add("on");
})

button.addEventListener("click",()=>{
    modalContainer.classList.remove("on");

})

for(let star of stars){
    
    star.addEventListener("click",()=>{
        star.src = "/assets/star.svg";
        let index = star.dataset.value;
        changeText(index);

        for(let stara of stars){
            if(stara.dataset.value <= index)
                stara.src = "/assets/star.svg";
            else
                stara.src = "/assets/star-off.svg";
        }
    })
}

function changeText(i){
    switch(i){
        case "1": 
            p.textContent = "Muito Ruim!";
            break;
        case "2":
            p.textContent = "Precisa Melhorar!";
            break;
        
        case "3":
            p.textContent = "Mais ou menos!";
            break;

        case "4":
            p.textContent = "Ótimo!";
            break;

        case "5":
            p.textContent = "Excelente!";
            break;
        
    }
}
