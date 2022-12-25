const ef3 = document.getElementById('ef3');
const ef4 = document.getElementById('ef4');
const ef5 = document.getElementById('ef5');
const ef6 = document.getElementById('ef6');
const ef11 = document.getElementById('ef11');
const ef13 = document.getElementById('ef13');

ef3.addEventListener('mouseenter', (e) => {
    e.target.style.transform = 'scale(-1,1)'
})
ef3.addEventListener('mouseout', (e) => {
    e.target.style.transform = 'scale(1,1)'
})

ef4.addEventListener('mouseenter', (e) => {
    let opacity = 20;

setInterval(function ik() {
        if(opacity > 50){
            e.target.style.opacity = `${opacity}%`
            opacity = Math.ceil(Math.random()*100);
        } else {
            e.target.style.opacity = `${opacity}%`
            opacity = Math.ceil(Math.random()*100);
        }
    },1000);   
})

function randColor(elem) {   
    var element = document.getElementById(elem),              
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);  
    element.style.backgroundColor = color;           
}

ef5.addEventListener('click',() => {
    randColor(ef5.id);
})

ef6.addEventListener('mouseenter',() => {
    randColor(ef6.id);
})


var typeText = document.querySelector(".typeText")
var textToBeTyped = "большой крутой огр"
var index = 0, isAdding = true

function playAnim() {
  setTimeout(function () {
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      if (index > textToBeTyped.length) {
        isAdding = false
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        index++
      }
    } else {
      if (index === 0) {
        isAdding = true
      } else {
        index--
      }
    }
    playAnim()
  }, 120)
}
playAnim()

const btnAlert = document.getElementById('btn');
btnAlert.addEventListener('click', () => {
    alert('Поздравляю! Вы нашли кнопку!')
})

const btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    const points = ['Я кнопка','Почему я кнопка?','Не нажимай на меня','Я обиделась :(']
    let currentIndex = points.indexOf(e.target.innerText);
    console.log(currentIndex)
    e.target.innerText = points[currentIndex+1] ?? points[0];
})

const promtClick = document.getElementById('btnPromt');
promtClick.addEventListener('click', () => {
    let res = prompt('Сколько вам лет?');
    let list = document.getElementById('soc-opros');
    let current = document.getElementById(res)
     
    if(current){
        console.log(current.innerText)
        current.innerText = String(Number(current.innerText)+1);
    } else {
        let p = document.createElement('p');
        let counter = document.createElement('span');
        counter.innerText = '1'
        p.innerText = `${res} лет :`;
        counter.id = res;
        p.append(counter);
        list.append(p);
    } 
})

ef11.addEventListener('click', () => {
    let start = Date.now();

    setInterval(() => {
        let int = Date.now() - start;
        ef11.style.rotate = `${int/5}deg`;
        if (int >= 10000) {

            ef11.style.rotate = '0deg'
            return;
          }
    }, 20)
  
})

ef13.addEventListener('click', (e) => {
    if(ef13.style.filter === 'blur(50px)'){
        ef13.style.filter = 'blur(0px)'
    }else {
        ef13.style.filter = 'blur(50px)'
    }
  
})
