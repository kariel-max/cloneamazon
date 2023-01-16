const url = "http://www.omdbapi.com/?i=tt3896198&apikey=1d7f0143&t=batman"
const imgUrl = "http://img.omdbapi.com/?i=tt3896198&apikey=1d7f0143&t=batman"


const sectionConteudo = document.querySelector(".conteudo")

let banner = document.querySelector('.banner1').clientWidth
let inbanner = document.querySelectorAll('.banner1').length

imgmove = 0; 

function mudarImg() {
    imgmove++
   if (imgmove >= inbanner) {
    imgmove = 0;
   }
   let totalImg = imgmove * banner;
   document.querySelector('.banner').style.marginLeft=`-${totalImg}px`;
}
setInterval(mudarImg, 5000);

// API filmes 
async function getIforMove() {
    const response = await fetch(url);

    const data = await response.json();

    data.map((post) => {
        
    })

}
getIforMove();
// debounce
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-mover]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })

}
animeScroll();

if (target.length) {
window.addEventListener('scroll', debounce(function(){
    animeScroll();
}, 200));
}