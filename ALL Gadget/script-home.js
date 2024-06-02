const productContainers = [...document.querySelectorAll('.gadget')];
const next = [...document.querySelectorAll('.next')];
const prev = [...document.querySelectorAll('.prev')];

productContainers.forEach((item, i) => {
    let imgD= item.getBoundingClientRect();
    let imgW = imgD.width;

    next[i].addEventListener('click', () => {
        item.scrollLeft += imgW;
    })

    prev[i].addEventListener('click', () => {
        item.scrollLeft -= imgW;
    })
})