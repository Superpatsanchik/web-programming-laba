function snowDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString();
}

window.addEventListener('load', snowDate);