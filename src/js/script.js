// sticky navbar
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.remove('top');
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
        navbar.classList.add('top');
    }
});

// AOS init
AOS.init();

// parallax
var scene = document.getElementById('landing-page');
var parallaxInstance = new Parallax(scene);

// back button
function goBack() {
    window.history.back();
  }

// hideloader
function hideLoader() {
    document.getElementById('loader-page').classList.add('d-none')
}