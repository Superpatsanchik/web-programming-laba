function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
        else
            button.innerHTML = 'Щелчок';
}

function clickMe2(button) {
    if(button.innerHTML == 'Кирилл')
        button.innerHTML = 'Руссу';
        else
            button.innerHTML = 'Кирилл';
}

function knopka(button) {
    if(button.innerHTML == 'Нажми меня') {
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'red';
    }
        
    else if(button.innerHTML == 'Ещё раз нажми') {
        button.innerHTML = 'Ещё';  
        button.style.color = 'blue';
    }
         
    else if(button.innerHTML == 'Ещё') {
        button.innerHTML = 'Начать сначала';   
        button.style.color = 'pink';
    }
        
    else {
        button.innerHTML = 'Нажми меня' 
        button.style.color = 'violet'; 
    }
}