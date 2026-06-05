const carousel = document.querySelector('.carousel');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const folders = Array.from(document.querySelectorAll('.folder'));

folders.forEach(folder => {
    carousel.appendChild(folder.cloneNode(true));
});

const passo = 370;
const totalOriginal = folders.length;

let index = 0;

carousel.style.transition = 'transform 0.5s ease';

next.addEventListener('click', () => {
    index++;

    carousel.style.transform =
        `translateX(-${index * passo}px)`;

    if(index >= totalOriginal){
        setTimeout(() => {
            carousel.style.transition = 'none';
            index = 0;
            carousel.style.transform =
                `translateX(0px)`;

            carousel.offsetHeight;

            carousel.style.transition =
                'transform 0.5s ease';
        }, 500);
    }
});

prev.addEventListener('click', () => {
    if(index <= 0){
        carousel.style.transition = 'none';

        index = totalOriginal;

        carousel.style.transform =
            `translateX(-${index * passo}px)`;

        carousel.offsetHeight;

        carousel.style.transition =
            'transform 0.5s ease';
    }

    index--;

    carousel.style.transform =
        `translateX(-${index * passo}px)`;
});
console.log(next);
console.log(prev);
console.log(carousel);