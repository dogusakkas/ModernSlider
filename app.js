const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rightArr");
const textDiv = document.querySelector(".texts");
let index = 0;

const texts = [
    "Uygulama gerçekten şahaneydi, kullanışlı",
    "Uygulamayı ilk defa kullanıyorum. Herkesin kullanmasını öneririm",
    "Bu film nasıl bu kadar beğenildi anlamıyorum gerçekten insanlar tam bir zevksiz"
]

gsap.from(".texts", .8, { y: '-100%' });

function slideLeft() {
    if (index == 0) index = texts.length - 1;
    else index--;
    gsap.to(".images", .3, { x: `${-index*100}%` })
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, { y: -20, opacity: 0, ease: 'power3.out' })
}

function slideRight() {
    if (index == texts.length - 1) index = 0;
    else index++;
    gsap.to(".images", .3, { x: `${-index*100}%` })
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, { y: -20, ease: 'power3.out' })
}

rightArr.addEventListener("click", slideRight);
leftArr.addEventListener("click", slideLeft);