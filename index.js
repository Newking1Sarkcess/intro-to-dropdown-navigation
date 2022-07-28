const menuOpen = document.getElementById("menu");

const closeMenu = document.getElementById("close-menu");

const navUl = document.querySelector("nav ul");
 


menuOpen.addEventListener('click', ()=>{
    navUl.classList.toggle("openMenu");
    if(navUl.classList.contains("openMenu")){
        menuOpen.classList.add("hide")
        closeMenu.classList.add("show");
        closeMenu.addEventListener('click', ()=>{
            closeMenu.classList.remove("show")
            navUl.classList.remove("openMenu")
            menuOpen.classList.remove("hide")

        })
    }
       
})  


// console.log(closeMenu)
// console.log(menuOpen)
// console.log(navUl)
