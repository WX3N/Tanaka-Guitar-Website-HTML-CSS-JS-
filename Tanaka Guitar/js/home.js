const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const home = document.querySelector('.home');
const gitar = document.querySelector('.gitar-collection');
const partner = document.querySelector('.partner');
const footer = document.querySelector('.area-footer');

category.onclick = () =>{
    navbar.classList.toggle('muncul');
    home.classList.toggle('muncul');
    gitar.classList.toggle('muncul');
    partner.classList.toggle('muncul');
    footer.classList.toggle('muncul');

}