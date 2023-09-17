const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const contact = document.querySelector('.fullcontact');
const loc = document.querySelector('.location');
const footer = document.querySelector('.area-footer');


category.onclick = () =>{
    navbar.classList.toggle('muncul');
    contact.classList.toggle('muncul');
    loc.classList.toggle('muncul');
    footer.classList.toggle('muncul');

}