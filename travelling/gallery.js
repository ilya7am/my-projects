let picArray = document.querySelectorAll('.card');


for (let item of picArray) {
    item.addEventListener('click', () => {
        removeActiveItem();
        item.classList.add('active')
    })
}

/* function removeActiveItem() {
    for (item of picArray) {
        item.classList.remove('active');
    }
} */

function removeActiveItem() {
    picArray.forEach((item) => {
    item.classList.remove('active');
    })
}

