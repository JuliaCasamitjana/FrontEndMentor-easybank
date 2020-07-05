const nav_menu = document.getElementById('nav_menu')
const nav_open = document.getElementById('nav_open')
const nav_close = document.getElementById('nav_close')
const bg= document.getElementById('bg')

openNav = () =>{
    nav_menu.classList.toggle('active');
    nav_open.style.display="none";
    nav_close.style.display="block";

}

closeNav = () =>{
    nav_menu.classList.toggle('active');
    nav_open.style.display="block";
    nav_close.style.display="none";
}

