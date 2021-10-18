let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let colorBtn = document.querySelector('#color-btn');
let themeBtn = document.querySelector('#theme-btn');

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let colorPalette = document.querySelector('.color-palette');

menuBtn.onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    colorPalette.classList.remove('active');
}

searchBtn.onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    colorPalette.classList.remove('active');
}

colorBtn.onclick = () =>{
    colorPalette.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    colorPalette.classList.remove('active');
}

document.querySelectorAll('.color-palette .color').forEach(btn =>{
    btn.onclick = () =>{
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color',color);
    }
});

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');
    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}