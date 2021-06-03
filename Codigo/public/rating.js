const stars = document.querySelectorAll(".modal-content .rating-area img");
const p = document.querySelector(".modal-content .rating-text");

for(let star of stars){
    
    star.addEventListener("click",()=>{
        star.src = "/assets/star.svg";
        let index = star.dataset.value;
        changeText(index);

        for(stara of stars){
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