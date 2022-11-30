function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Руссу Кирилл';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-01, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'Введите имя';

    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'Введите вашу фамилию';

    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'Введите возраст';

    document.getElementById('ok-button').value = 'Ок';
    document.getElementById('reset-button').value = 'Сброс';
}

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Russu Kirill';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-01, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'enter your name';

    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'Enter surname';

    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'Enter your age';

    document.getElementById('ok-button').value = 'Ok';
    document.getElementById('reset-button').value = 'Reset';
}
function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    alert('Привет, ' + userName + ' ' + userSurname +'\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}

function showAlert2() {
    let footer = document.getElementById('footer');
    alert('бум бум бум');
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('footer').style.backgroundColor = color;
}
function showAlert3() {
    let header = document.getElementById('.header');
    alert('бум бум бум');
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('.header').style.backgroundColor = color;
}