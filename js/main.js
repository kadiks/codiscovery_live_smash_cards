let prevBtn = null;
let nextBtn = null;
let imgEl = null;
let textEl = null;
let titleEl = null;
let bgCharEl = null;

const characters = [
    {
        name: 'marth',
        title: 'Marth',
        color: 'royalblue',
        text: `I may be biased but he's the est swordmen in smash game`
    },
    {
        name: 'mario',
        title: 'Mario',
        color: 'crimson',
        text: 'Plumber, princess savior & mushroom lover'
    },
    {
        name: 'pikachu',
        title: 'Pikachu',
        color: 'orange',
        text: 'Pika pika, pikachu!'
    },
    {
        name: 'link',
        title: 'Link',
        color: 'lightskyblue',
        text: 'The Hyrule warrior, protector of the Triforce'
    },
    {
        name: 'toon_link',
        title: 'Toon Link',
        color: 'yellowgreen',
        text: 'Still warrior, still protector, way funnier'
    },
    {
        name: 'yoshi',
        title: 'Yoshi',
        color: 'lightgreen',
        text: `Is he a dragon? Is he a pokemon? No, he's a Yoshi!`
    },
    {
        name: 'falco',
        title: 'Falco',
        color: 'paleturquoise',
        text: 'He should be the leader of the team. Just sayin'
    }
];

let charIndex = 0;

const init = () => {
    // console.log('Init');

    bgCharEl = document.querySelector('.card-header');
    imgEl = document.querySelector('.character-image');
    titleEl = document.querySelector('.card-body h2');
    textEl = document.querySelector('.card-body p');
    prevBtn = document.querySelector('.nav-prev button');
    nextBtn = document.querySelector('.nav-next button');

    prevBtn.addEventListener('click', () => {
        console.log('Prev Button clicked');

        charIndex--;
        console.log('charIndex', charIndex);

        if (charIndex === -1) {
            charIndex = characters.length - 1;
        }

        const currentChar = characters[charIndex];

        changeCharacter(currentChar, -1);

        


        // imgEl.setAttribute('src', 'img/marth.png');
        // textEl.textContent = "Hello I'm Marth!";
    });
    nextBtn.addEventListener('click', () => {
        console.log('Next Button clicked');

        charIndex++;
        console.log('charIndex', charIndex);

        if (charIndex === characters.length) {
            charIndex = 0;
        }

        const currentChar = characters[charIndex];
        

        console.log(currentChar);

        changeCharacter(currentChar, 1);

    });
};

const changeCharacter = (character, dir) => {
    
    let startAnimation = 'animate__fadeOutLeft';
    let endAnimation = 'animate__fadeInRight';

    if (dir === -1) {
        startAnimation = 'animate__fadeOutRight';
        endAnimation = 'animate__fadeInLeft';
    }

    // Fade out prevChar
    imgEl.classList.add('animate__animated', startAnimation, 'animate__slow');
    // Change character
    // setTimeout(/** function */, /** duration in ms */);
    setTimeout(() => {
        imgEl.classList.remove(startAnimation);
        imgEl.setAttribute('src', `img/${character.name}.png`);
        titleEl.textContent = character.title;
        textEl.textContent = character.text;
        bgCharEl.style.backgroundColor = character.color;

        // Fade in nextChar
        imgEl.classList.add(endAnimation);
        
        setTimeout(() => {
            imgEl.classList.remove(endAnimation);
        }, 2000);

    }, 2000);
};


// window.onload = init;
window.addEventListener('load', init);