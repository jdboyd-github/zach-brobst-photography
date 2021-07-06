const sections = document.querySelectorAll('section');
const homeButton = document.querySelector('#home');
const aboutButton = document.querySelector('#aboutme');
const portfolioButton = document.querySelector('#portfolio');
const contactButton = document.querySelector('#contact');
const links = document.querySelectorAll('.link')

let index = 0;
let indexSelect = 0;

let lastTime = 0;
const animationDuration = 2000;

const toggleText = (index, state) => {
    if(state == 'show') {
        for(var i = 0; i < sections.length; i++) {
            if(i == index) {
                sections[i].querySelector('.text').classList.add('show');
            }
        }
    } else {
        for(var i = 0; i < sections.length; i++) {
            if(i == index) {
                sections[i].querySelector('.text').classList.remove('show');
            }
        }
    }
}

const selectLink = (n) => {
    for(var i = 0; i < links.length; i++) {
        if(i == n) {
            links[i].classList.remove('link');
            links[i].classList.add('select');
        } else {
            links[i].classList.remove('select');
            links[i].classList.add('link');
        }
    }
}

selectLink(0);
toggleText(0, 'show');

homeButton.addEventListener('click', () => {
    if(index == 0) return;

    toggleText(index, 'hide');
    index = 0;

    toggleText(0, 'show')
    selectLink(0);
    sections[0].scrollIntoView({behavior: 'smooth'});
});

aboutButton.addEventListener('click', () => {
    if(index == 1) return;

    toggleText(index, 'hide');
    index = 1;

    toggleText(1, 'show')
    selectLink(1);
    sections[1].scrollIntoView({behavior: 'smooth'});
});

portfolioButton.addEventListener('click', () => {
    if(index == 2) return;

    toggleText(index, 'hide');
    index = 2;

    toggleText(2, 'show')
    selectLink(2);
    sections[2].scrollIntoView({behavior: 'smooth'});
});

contactButton.addEventListener('click', () => {
    if(index == 3) return;

    toggleText(index, 'hide');
    index = 3;

    toggleText(3, 'show')
    selectLink(3);
    sections[3].scrollIntoView({behavior: 'smooth'});
});

document.addEventListener('wheel', function (e) {
    const delta = e.wheelDelta;
    const currentTime = new Date().getTime();

    if(currentTime - lastTime < animationDuration) {
        e.preventDefault();
        return;
    }
    
    if(delta < 0) {
        if(index > 2) return;

        toggleText(index, 'hide');
        index++;

        toggleText(index, 'show');
        selectLink(index);
        sections[index].scrollIntoView({behavior: 'smooth'});
    } else {
        if(index < 1) return;

        toggleText(index, 'hide');
        index--;
        
        toggleText(index, 'show');
        selectLink(index);
        sections[index].scrollIntoView({behavior: 'smooth'});
    }

    lastTime = currentTime;
}, {passive:false})

