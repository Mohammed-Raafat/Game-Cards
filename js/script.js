

// PLEASE READ THIS BEFORE READING THE CODE
/*

The Idea is:
    Using JavaScript to create elements inside HTML for all characters,
    so that each character can be added, updated and deleted without using HTML, just do that inside an array of objects.

Steps:
    1- Create an array of objects called charactersList.
    2- Create all characters using createCharacter() function which take each object (from charactersList) as a parameter.
    3- Create every thing related to the character using myCreateElement() function which is used inside createCharacter().
    4- Click (or Press) previous or next arrow to slide between characters using changeCard() function which takes previous or next as a parameter.
 

NOTES:
    1- Every function has a comment inside and outside it to explain its functionality.
    2- Declarations of variables and constants are found close to their usage. (Declare it, then use it directly)
    3- The word Character and Card have the same meaning. (and of course Character doesn't refer to a letter :D)
    4- The main functions are: myCreateElement(), createCharacter() and changeCard().
    5- The user can use clicking on displayed arrows or keyboard arrows to slide between characters.

*/

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


// This is an Array of Objects, each object refers to a Character with its attributes like name, image, description and so on.
var charactersList = [
    {
        id: 'the-barbarian',
        name: 'The Barbarian',
        imgPath: 'images/1.png',
        imgAlt: 'The Barbarian Character',
        levelNum: 4,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum recusandae elit voluptibus architecto minima possimus.',
        strength: 20,
        speed: 16,
        cost: 250,
        bgColor: '#EC9B3B',
        soundEffectPath: 'sounds/barbarian-sound.mp3'
    },
    {
        id: 'the-knight',
        name: 'The Knight',
        imgPath: 'images/2.png',
        imgAlt: 'The Knight Character',
        levelNum: 5,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum recusandae elit voluptibus architecto minima possimus.',
        strength: 25,
        speed: 19,
        cost: 300,
        bgColor: '#4FACFF',
        soundEffectPath: 'sounds/king-sound.mp3'
    },
    {
        id: 'the-giant',
        name: 'The Giant',
        imgPath: 'images/3.png',
        imgAlt: 'The Giant Character',
        levelNum: 7,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum recusandae elit voluptibus architecto minima possimus.',
        strength: 35,
        speed: 12,
        cost: 2250,
        bgColor: '#78ad29',
        soundEffectPath: 'sounds/giant-sound.mp3'
    }
];

// This function is to Create an element inside HTML.
function myCreateElement(element, parent, className) {

    /* This function is used to:
        1- Create an element of type element.
        2- Add className to it (if sent).
        3- Append it to a parent.
        4- Finally, return it.
    */

    // Creating the element (as a child) of type element as received.
    const childElement = document.createElement(element);

    // Adding className to the created element. (if className has value)
    if (className !== undefined) {
        childElement.className = className;
    }

    // Appending the created element to the parent which has been sent as an argument.
    parent.appendChild(childElement);

    // Finally, returning the element created so that it can be used out of the function.
    return childElement;
}

// Select the div called characters, to put all characters inside it by createCharacter() function.
const charactersDiv = document.getElementById('characters');

// This function is to Create a Character inside HTML. (Uses myCreateElement() function a lot)
function createCharacter(charObj, display) {

    /* This function is used to: (assigning character properties from charObj)
        1- Create cardDiv inside charactersDiv, then assign its display property to it. (none or block)
        2- Create cardSoundEffect.
        3- Create cardHeaderDiv, cardBodyDiv and cardFooterDiv, all inside cardDiv.
        4- Create contents of the three divs: cardHeaderDiv, cardBodyDiv and cardFooterDiv
    */

    // Create Card Div
    const cardDiv = myCreateElement('div', charactersDiv, 'my-card');
    cardDiv.style.display = display;
    cardDiv.setAttribute('id', charObj.id);

    // Create cardSoundEffect
    const cardSoundEffect = myCreateElement('audio', cardDiv);
    cardSoundEffect.setAttribute('src', charObj.soundEffectPath);

    // Inside Card Div, create 3 divs, Header, Body and Footer
    // Create Card Header Div
    const cardHeaderDiv = myCreateElement('div', cardDiv, 'my-card-header align-div-center');

    // Create Card Body Div
    const cardBodyDiv = myCreateElement('div', cardDiv, 'my-card-body align-div-center');

    // Create Card Footer Div
    const cardFooterDiv = myCreateElement('div', cardDiv, 'my-card-footer');
    cardFooterDiv.style.background = charObj.bgColor;

    /////////////////////////////
    // Inside Card Header Div
    const headerImg = myCreateElement('img', cardHeaderDiv);
    headerImg.setAttribute('src', charObj.imgPath);
    headerImg.setAttribute('alt', charObj.imgAlt);

    /////////////////////////////
    // Inside Card Body Div
    const bodyContentDiv = myCreateElement('div', cardBodyDiv, 'content');

    // Create Character Level
    const charLevel = myCreateElement('span', bodyContentDiv);
    charLevel.textContent = 'Level ' + charObj.levelNum;

    // Create Character Name
    const charName = myCreateElement('h2', bodyContentDiv);
    charName.textContent = charObj.name;

    // Create Character Description
    const charDescription = myCreateElement('p', bodyContentDiv);
    charDescription.textContent = charObj.description;

    /////////////////////////////
    // Inside Card Footer Div
    // Create Strength Div and its components
    const strengthDiv = myCreateElement('div', cardFooterDiv, 'align-div-center strength');
    const strengthContent = myCreateElement('div', strengthDiv, 'content');
    const strengthValue = myCreateElement('h2', strengthContent);
    strengthValue.textContent = charObj.strength;

    const strengthSpan = myCreateElement('span', strengthContent);
    strengthSpan.textContent = 'Strength';

    // Create Speed Div and its components
    const speedDiv = myCreateElement('div', cardFooterDiv, 'align-div-center speed');
    const speedContent = myCreateElement('div', speedDiv, 'content');
    const speedValue = myCreateElement('h2', speedContent);
    speedValue.textContent = charObj.speed;

    const speedSpan = myCreateElement('span', speedContent);
    speedSpan.textContent = 'Speed';

    // Create Cost Div and its components
    const costDiv = myCreateElement('div', cardFooterDiv, 'align-div-center cost');
    const costContent = myCreateElement('div', costDiv, 'content');
    const costValue = myCreateElement('h2', costContent);
    costValue.textContent = charObj.cost;

    const costSpan = myCreateElement('span', costContent);
    costSpan.textContent = 'Cost';
}

// This loop is to create all characters and put them inside the general div called character, and make the first one only appear.
for (let i = 0; i < charactersList.length; i++) {
    // Make the first one appear.
    // All other characters will be created but with display:none.
        createCharacter(charactersList[i], (i == 0 ? 'block' : 'none'));
}

// These variables are used inside changeCard() function
var counter = 0;
var currentIndex = 0;

// Select all cards (after creation), to become an array to use it in sliding left & right.
const allCards = document.querySelectorAll('.my-card');

// This function is to change the current card to another one depending on direction, previous or next. 
function changeCard(direction) {

    /* This function is used to:
        1- Force stop the sound of the current character. (To handle if the user suddenly changed while sound is playing)
        2- Start animation. (Rotate)
        3- Change the card. (after exact time)
        4- Remove the animation.
    */
    
    // To stop soundEffect of the current character, then start the soundEffect of the next or previous character.
    allCards[currentIndex].querySelector('audio').pause();
    allCards[currentIndex].querySelector('audio').currentTime = 0;

    // To animate by rotating.
    charactersDiv.style.animationName = 'rotateAnime';

    // Start changing card.
    setTimeout(function () {
        // Display none for the current card.
        allCards[currentIndex].style.display = 'none';

        // Detect direction, and the sliding will be like a circle. (using %allCards.length)
        if (direction === 'next') {
            // Modify currentIndex (by increasing it) to select the next one.
            currentIndex = ++counter % allCards.length;
        } else if (direction === 'previous') {
            if(currentIndex === 0) {
                // To make sliding like a circle, 0, 1, ..., (length-1), 0, 1, ..., (length-1) and so on,
                // so, if the currentIndex is 0 (first one), and user pressed PREVIOUS, so it goes to the last one (length-1).
                counter = allCards.length;
            }

            // Modify currentIndex (by decreasing it) to select the previous one.
            currentIndex = --counter % allCards.length;
        }

        // Display the new card.
        allCards[currentIndex].style.display = 'block';

        // Play the sound of the new card.
        allCards[currentIndex].querySelector('audio').play();
    }, 475);

    // To remove animation after sliding. (800 ms is the time of the animation)
    setTimeout(function () {
        charactersDiv.style.animationName = '';
    }, 800);
}

//////////////////////////// Mouse Click ////////////////////////////

// This function is for mouse click
function handleClick() {
    // Send the id of arrow as a parameter, next OR previous, to detect which direction to change.
    changeCard(this.getAttribute('id'));
}

// Loop on the two arrow buttons to handle clicking on each one of them by calling handleClick function
document.querySelectorAll('.arrow>span').forEach((arrow) => {
    arrow.addEventListener('click', handleClick);
});


//////////////////////////// Keyboard Click ////////////////////////////

// This function is for keyboard press (Left & Right Arrows Only).
function handlePress(event) {
    // This keyCode 39 refers to Right Arrow on Keyboard, which means Next.
    if (event.keyCode === 39) {
        changeCard('next');
    }

    // This keyCode 37 refers to Left Arrow on Keyboard, which means Previous.
    else if (event.keyCode === 37) {
        changeCard('previous');
    }
}

// addEventListener after pressing Left or Right Arrow from keyboard, then call handlePress function.
document.addEventListener('keydown', handlePress);
