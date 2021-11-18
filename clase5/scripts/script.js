let brg = document.querySelector(".burger");
let nav = document.querySelector(".container-2-nav-bar")

brg.addEventListener('click',()=>{
    brg.classList.toggle('brg-active');
    nav.classList.toggle('nav-active');
    nav.classList.add('active');
})

