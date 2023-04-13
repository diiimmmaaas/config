// получаем элементы

const elPower = document.getElementById('power').value;
const elEnter = document.getElementById('enters').value;

const setDisplay5 = document.querySelector('.setDisplay5');
const setDisplay7 = document.querySelector('.setDisplay7');
const setDisplay9 = document.querySelector('.setDisplay9');

// объекты с значениями

const allValue = {
  power: null,
  voltage: null,
  enter: null,
  transformerW: null,
  voltageInput: null,
  voltageExit: null,
  voltageExit2: null,
  VMashine: null,
  wishes: null,
  schemeNumber5: null,
  schemeNumber7: null,
  schemeNumber9: null,
};

// функция добавления элементов в объект

const addItemToObj = (id, groupName) => {
  document.getElementById(id).addEventListener(
    'change', () => {
      allValue[groupName] = document.getElementById(id).value;
      console.log(allValue)
    }
  )
}

// после изменения в select отрабатывает функция и кидает в объект, если надо переопределяет

elPower.onchange = addItemToObj('power', 'power');

document.getElementById('voltage').onchange = addItemToObj( 'voltage', 'voltage');

elEnter.onchange = addItemToObj( 'enters', 'enter');

// получаем src картинок

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let image4 = document.getElementById('image4');
let image5 = document.getElementById('image5');
let image6 = document.getElementById('image6');
let image7 = document.getElementById('image7');
let image8 = document.getElementById('image8');
let image9 = document.getElementById('image9');
let image10 = document.getElementById('image10');
let image11 = document.getElementById('image11');

// добавляем border на картинки (выделение)
//с 1 по 2 картинку в начале
image1.addEventListener('click', () => {
  image1.classList.add('activeImage');
  image2.classList.remove('activeImage');
})

image2.addEventListener('click', () => {
  image1.classList.remove('activeImage');
  image2.classList.add('activeImage');
})

// c 6-8 картинку бордер
image6.addEventListener('click', () => {
  image6.classList.add('activeImage');
  image7.classList.remove('activeImage');
  image8.classList.remove('activeImage');
})

image7.addEventListener('click', () => {
  image6.classList.remove('activeImage');
  image7.classList.add('activeImage');
  image8.classList.remove('activeImage');
})

image8.addEventListener('click', () => {
  image6.classList.remove('activeImage');
  image7.classList.remove('activeImage');
  image8.classList.add('activeImage');
})

//c 9 по 11
image9.addEventListener('click', () => {
  image9.classList.add('activeImage');
  image10.classList.remove('activeImage');
  image11.classList.remove('activeImage');
})

image10.addEventListener('click', () => {
  image9.classList.remove('activeImage');
  image10.classList.add('activeImage');
  image11.classList.remove('activeImage');
})

image11.addEventListener('click', () => {
  image9.classList.remove('activeImage');
  image10.classList.remove('activeImage');
  image11.classList.add('activeImage');
})

// отображаем сами картинки по условию

setInterval(() => {
  if (400 >= Number(allValue.power) && Number(allValue.power) <= 630) { // в () условие для отображения
    setDisplay5.style.display = 'flex';  //по дефолту у нас diplay none у всех картинок (сделано чтобы не было голых изображений на пейдже, так как они уже у нас инициализированы)
    image1.src = `./src/img/5.1/120.20.png`;  //добавляем к каждой картинке src картинки
    image2.src = `./src/img/5.1/120.21.png`;
    image3.src = `#`;
    image4.src = `#`;
    image5.src = `#`; //пятого элемента нет, ставим diplay none чтобы не было отсутствия картинки на странице
    image5.style.display = 'none';
    image4.style.display = 'none';
    image3.style.display = 'none';
  }
  else if (1000 >= Number(allValue.power) <= 2500) {
    setDisplay5.style.display = 'flex';
    image1.src = `./src/img/5.2/120.28.png`;
    image2.src = `./src/img/5.2/120.29.png`;
    image3.src = `#`;
    image4.src = `#`;
    image5.src = `#`;
    image5.style.display = 'none';
    image4.style.display = 'none';
    image3.style.display = 'none';
  }
//отображение всех менюшек после главной
  if (allValue.power !== null && allValue.voltage !== null && allValue.enter !== null) {
    document.querySelector('.inputTransformer').style.display = 'flex';
    document.querySelectorAll('.voltageInput')[0].style.display = 'flex';
    document.querySelectorAll('.voltageInput')[1].style.display = 'flex';
    document.querySelector('.lastQuestions').style.display = 'flex';
  }
}, 1000) //таймер в мс, можем изменять для скорости отображения (приемлемая скорость 1000мс)


const transformerValue = document.getElementById('transformer') // получаем инпуты
const voltageInputValue = document.getElementById('VInput') // получаем инпуты

transformerValue.onchange = () => { //при изменении инпута мы добавляем в src картинок путь
  allValue.transformerW = transformerValue.value; // закидываем в объект значения инпута
  setInterval(() => { //будет проверять изменения 1 и 4 select'a, в ином случае у нас будет работать от onchange
    if (Number(allValue.power) <= 1250) {
      setDisplay7.style.display = 'flex';
      image6.src = `./src/img/7.1/220.8.png`;
      image7.src = `./src/img/7.1/220.9.png`;
      image8.src = `./src/img/7.1/220.10.png`;
      image8.style.display = 'flex'
    }
    else if (Number(allValue.power) >= 1600) {
      setDisplay7.style.display = 'flex';
      image6.src = `./src/img/7.2/220.10.png`;
      image7.src = `./src/img/7.2/220.14.png`;
      image8.src = `#`;
      image8.style.display = 'none'
    }
  }, 1000)
}

voltageInputValue.onchange = () => {
  allValue.voltageInput = voltageInputValue.value
  setInterval(() => {
    if (Number(allValue.power) <= 1250) {
      setDisplay9.style.display = 'flex';
      image9.src = `./src/img/9.1/221.11.png`;
      image10.src = `./src/img/9.1/221.12.png`;
      image11.src = `./src/img/9.1/221.13.png`;
    }
    else if (Number(allValue.power) >= 1600) {
      setDisplay9.style.display = 'flex';
      image9.src = `./src/img/9.2/221.11.png`;
      image10.src = `./src/img/9.2/221.12.png`;
      image11.src = `#`;
      image11.style.display = 'none'
    }
  },1000)
}

//получаем инпуты с последних двух вопросов

const voltExit = document.getElementById('question10Input');
const userWishes = document.getElementById('question11Input');

// добавляем значения двух последних инпутов в объект

voltExit.onchange = () => {
  allValue.voltageExit = voltExit.value;
}

userWishes.onchange = () => {
  allValue.wishes = userWishes.value
}

document.getElementById('question13Input').onchange = () => {
  allValue.voltageExit2 = document.getElementById('question13Input').value
}

document.getElementById('VInput2').onchange = () => {
  allValue.VMashine = document.getElementById('VInput2').value
}

function addSchemeNumber(id, groupName) {
  document.getElementById(id).addEventListener(
    'click', (from, length) => {
      const defoltImage = document.getElementById(id).src //убираем лишнее с ссылки
      const splitImage = defoltImage.substring(42, defoltImage.length)
      const splitPng = splitImage.substring(9, splitImage.length - 4)
      allValue[groupName] = splitPng;
      console.log(allValue)
    }
  )
}

// забиваем по клику src картинки в object и в функции отрезаем не нужные куски

image1.onclick = addSchemeNumber('image1', 'schemeNumber5');
image2.onclick = addSchemeNumber('image2', 'schemeNumber5');
image3.onclick = addSchemeNumber('image3', 'schemeNumber5');
image4.onclick = addSchemeNumber('image4', 'schemeNumber5');
image5.onclick = addSchemeNumber('image5', 'schemeNumber5');

image6.onclick = addSchemeNumber('image6', 'schemeNumber7');
image7.onclick = addSchemeNumber('image7', 'schemeNumber7');
image8.onclick = addSchemeNumber('image8', 'schemeNumber7');

image9.onclick = addSchemeNumber('image9', 'schemeNumber9');
image10.onclick = addSchemeNumber('image10', 'schemeNumber9');
image11.onclick = addSchemeNumber('image11', 'schemeNumber9');


document.getElementById('js_send').onclick = () => {
  document.getElementById('answer1').innerHTML = `Мощность ТП: ${allValue.power}кВА`
  document.getElementById('answer2').innerHTML = `Напряжение ВН/НН: ${allValue.voltage}кВ`
  document.getElementById('answer3').innerHTML = `Ввод/вывод РУВН/РУНН: ${allValue.enter}`
  document.getElementById('answer4').innerHTML = `Выбор схемы в 4 пункте: ${allValue.schemeNumber5}`
  document.getElementById('answer5').innerHTML = `Мощность силового трансформатора: ${allValue.transformerW}`
  document.getElementById('answer6').innerHTML = `Выбор схемы в 6 пункте: ${allValue.schemeNumber7}`
  document.getElementById('answer7').innerHTML = `Номинальный ток вводного коммутационного: ${allValue.voltageInput}`
  document.getElementById('answer8').innerHTML = `Номинальный ток сецкионного коммутационного аппарата: ${allValue.VMashine}`

  document.getElementById('answer9').innerHTML = `Выбор схемы в 9 пункте: ${allValue.schemeNumber9}`
  document.getElementById('answer10').innerHTML = `Номинальный ток коммутационных аппаратов на отходящих линиях для 1й секциии: ${allValue.voltageExit}`
  document.getElementById('answer11').innerHTML = `Номинальный ток коммутационных аппаратов на отходящих линиях для 2й секциии: ${allValue.voltageExit2}`
  document.getElementById('answer12').innerHTML = `Пожелания клиента : ${allValue.wishes}`
}

