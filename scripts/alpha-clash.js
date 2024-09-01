function handleKeyboardButtonPress(event) {

    let keyPressed = event.key;

    let currentAlphabetElemet = document.getElementById('current-alphabet');
    let currentAlphabetText = currentAlphabetElemet.innerText;
    
    let expactedAlphabet = currentAlphabetText.toLowerCase();
    
    if (expactedAlphabet === keyPressed) {
        console.log('you won');
        continueGame();
        removeBaclgroundColor(expactedAlphabet)
    } else {
        console.log('Wrong Key Pressed');
        
    }
    
}
document.addEventListener('keypress', handleKeyboardButtonPress);

function continueGame() {
    let currentAlphabet = randomAlphabets();
    
    let currentAlphabetElemets = document.getElementById('current-alphabet');
    currentAlphabetElemets.innerText = currentAlphabet;

    setBaclgroundColor(currentAlphabet);

    console.log(currentAlphabet);
    
}
function play() {
    removeClass('play-ground');
    addClass('home-screen');
    continueGame()
    
}