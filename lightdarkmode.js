let body = document.querySelector('body');
let button = document.getElementById('lightdarkmodebutton');
button.addEventListener('click', function() {
    if (body.dataset.bsTheme === 'light') {
        body.setAttribute('data-bs-theme', 'dark')
    } else {
        body.setAttribute('data-bs-theme', 'light')
    }
})