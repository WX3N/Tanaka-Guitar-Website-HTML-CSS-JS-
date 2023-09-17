const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const jenis = document.querySelector('.jenis');
const gitar = document.querySelector('.guitar');
const footer = document.querySelector('.area-footer');


category.onclick = () =>{
    navbar.classList.toggle('muncul');
    jenis.classList.toggle('muncul');
    gitar.classList.toggle('muncul');
    footer.classList.toggle('muncul');


}