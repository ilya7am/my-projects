const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ["AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGrey",
"DarkGreen",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
"DarkRed",
"DarkSalmon",
"DarkSeaGreen",
"DarkSlateBlue",
"DarkSlateGray",
"DarkSlateGrey",
"DarkTurquoise",
"DarkViolet",
"DeepPink",
"DeepSkyBlue",
"DimGray",
"DimGrey",
"DodgerBlue",
"FireBrick",
"FloralWhite",
"ForestGreen",
"Fuchsia",
"Gainsboro",
"GhostWhite",
"Gold",
"GoldenRod",
"Gray",
"Grey",
"Green",
"GreenYellow",
"HoneyDew",
"HotPink",
"IndianRed",
"Indigo",
"Ivory",
"Khaki",
"Lavender",
"LavenderBlush",
"LawnGreen",
"LemonChiffon",
"LightBlue",
"LightCoral",
"LightCyan",
"LightGoldenRodYellow",
"LightGray",
"LightGrey",
"LightGreen",
"LightPink",
"LightSalmon",
"LightSeaGreen",
"LightSkyBlue",
"LightSlateGray",
"LightSlateGrey",
"LightSteelBlue",
"LightYellow",
"Lime",
"LimeGreen",
"Linen",
"Magenta",
"Maroon",
"MediumAquaMarine",
"MediumBlue",
"MediumOrchid",
"MediumPurple",
"MediumSeaGreen",
"MediumSlateBlue",
"MediumSpringGreen",
"MediumTurquoise",
"MediumVioletRed",
"MidnightBlue",
"MintCream",
"MistyRose",
"Moccasin",
"NavajoWhite",
"Navy",
"OldLace",
"Olive",
"OliveDrab",
"Orange",
"OrangeRed",
"Orchid",
"PaleGoldenRod",
"PaleGreen",
"PaleTurquoise",
"PaleVioletRed",
"PapayaWhip",
"PeachPuff",
"Peru",
"Pink",
"Plum",
"PowderBlue",
"Purple",
"RebeccaPurple",
"Red",
"RosyBrown",
"RoyalBlue",
"SaddleBrown",
"Salmon",
"SandyBrown",
"SeaGreen",
"SeaShell",
"Sienna",
"Silver",
"SkyBlue",
"SlateBlue",
"SlateGray",
"SlateGrey",
"Snow",
"SpringGreen",
"SteelBlue",
"Tan",
"Teal",
"Thistle",
"Tomato",
"Turquoise",
"Violet",
"Wheat",
"White",
"WhiteSmoke",
"Yellow",
"YellowGreen"
]


let time = 0;
let score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
   /*  let screenOne = document.querySelector('.screen')
    screenOne.classList.add('up'); */
   
    screens[0].classList.add('up')
})


timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'))         /* вывод числового формата 10, 20, 30  */
           screens[1].classList.add('up')

        startGame()
    }
})



board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++;
        e.target.remove()           /* удалить предыдущий круг */
        createRandomCircle()
    }
})



function startGame() {
    setInterval(decreaseTime, 1000)             /* каждую сек счетчик */
    createRandomCircle()
    timeEl.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
    let current = --time;
    if (current < 10) {
        current = `0${current}`        /*   формат 01-09 */

    }
    timeEl.innerHTML = `00:${current}`
} }



function finishGame() {
    timeEl.parentNode.classList.add('hide')           /*  удаляет родителя этого элемента  */
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}


function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect()     /*   чтобы взять параметры ширины и высоты из массива  */

    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);;

    circle.classList.add('circle');
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getRandomColor();
    board.append(circle)
}


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function getRandomColor() {
    const index =  Math.floor(Math.random() * colors.length);
    return colors[index];
 }