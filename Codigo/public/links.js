const currentPage = location.pathname;
const links = document.querySelectorAll("nav ul a")
for(let link of links){
    if(currentPage.includes(link.getAttribute('href')) ){
        link.classList.add("actived")
    }
}   

const roles = document.querySelectorAll(".profile-role button");
for(let role of roles){
    role.addEventListener("click",()=> {
        
        if(role.classList.contains("actived"))
            role.classList.remove("actived");
        else
            role.classList.add("actived");
            
    })
}

const header = document.querySelector("header")
const actions = document.querySelector("header .actions")


let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

const linksMenu = menuSection.querySelectorAll(".actions ul a")

menuToggle.addEventListener("click", ()=>{
    document.body.style.overflow = show ? "hidden" : "initial";

    const status = false;
    for(let linkMenu of linksMenu){
        linkMenu.addEventListener("click",()=> {
            menuSection.classList.toggle("on",status);
        })
    }

    menuSection.classList.toggle("on",show);
    show = !show;

})



let paragraphProject = document.querySelector(".container-project .project-description-download .description p")
if(window.innerWidth <= 754){
    for(let i = 0; i < paragraphProject.textContent.length; i++){
        if(i > 150){
            let reduced = paragraphProject.textContent.slice(0,i)
            reduced += "..."
            paragraphProject.innerHTML = reduced
            console.log(paragraphProject)
            break;
        }
    }
}