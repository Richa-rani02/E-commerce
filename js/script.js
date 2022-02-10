let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}
let profilepage = document.querySelector('.profile-page');

document.querySelector('#profile-btn').onclick = () =>{
    profilepage.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    profilepage.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    
}

