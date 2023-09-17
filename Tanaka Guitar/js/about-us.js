const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const about = document.querySelector('.about');
const store = document.querySelector('.area-store');
const footer = document.querySelector('.area-footer');




category.onclick = () =>{
    navbar.classList.toggle('muncul');
    about.classList.toggle('muncul');
    store.classList.toggle('muncul');
    footer.classList.toggle('muncul');
}