const itemOne = document.querySelector('.item-one');        /* когда только 1 элемент  */
const countryOne = document.querySelectorAll('.korea');      /* all - когда их несколько  */

const itemTwo= document.querySelector('.item-two');
const countryTwo = document.querySelectorAll('.israel');     

const itemThree= document.querySelector('.item-three');
const countryThree = document.querySelectorAll('.new-york');     

const itemFour= document.querySelector('.item-four');
const countryFour = document.querySelectorAll('.germany');     

const itemFive= document.querySelector('.item-five');
const countryFive = document.querySelectorAll('.china');     


itemOne.addEventListener('dragstart', dragstart)
itemOne.addEventListener('dragend', dragend)

itemTwo.addEventListener('dragstart', dragstart)
itemTwo.addEventListener('dragend', dragend)

itemThree.addEventListener('dragstart', dragstart)
itemThree.addEventListener('dragend', dragend)

itemFour.addEventListener('dragstart', dragstart)
itemFour.addEventListener('dragend', dragend)

itemFive.addEventListener('dragstart', dragstart)
itemFive.addEventListener('dragend', dragend)


for (let placeholder of countryOne) {
    placeholder.addEventListener('dragover',dragover)
    placeholder.addEventListener('dragenter',dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',drop)
}

for (let placeholderTwo of countryTwo) {
    placeholderTwo.addEventListener('dragover',dragover)
    placeholderTwo.addEventListener('dragenter',dragenter)
    placeholderTwo.addEventListener('dragleave',dragleave)
    placeholderTwo.addEventListener('drop',dropTwo)
}

for (let placeholderThree of countryThree) {
    placeholderThree.addEventListener('dragover',dragover)
    placeholderThree.addEventListener('dragenter',dragenter)
    placeholderThree.addEventListener('dragleave',dragleave)
    placeholderThree.addEventListener('drop',dropThree)
}

for (let placeholderFour of countryFour) {
    placeholderFour.addEventListener('dragover',dragover)
    placeholderFour.addEventListener('dragenter',dragenter)
    placeholderFour.addEventListener('dragleave',dragleave)
    placeholderFour.addEventListener('drop',dropFour)
}

for (let placeholderFive of countryFive) {
    placeholderFive.addEventListener('dragover',dragover)
    placeholderFive.addEventListener('dragenter',dragenter)
    placeholderFive.addEventListener('dragleave',dragleave)
    placeholderFive.addEventListener('drop',dropFive)
}



function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}


function dragend(event) {
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}


function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(itemOne)
}   
function dropTwo(event) {
    event.target.classList.remove('hovered')
    event.target.append(itemTwo)
} 

function dropThree(event) {
    event.target.classList.remove('hovered')
    event.target.append(itemThree)
}   

function dropFour(event) {
    event.target.classList.remove('hovered')
    event.target.append(itemFour)
}

function dropFive(event) {
    event.target.classList.remove('hovered')
    event.target.append(itemFive)
}      



