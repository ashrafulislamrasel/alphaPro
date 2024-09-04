function continueplay() {
    let alphabet = getRandomAlphabets();
    let currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet)
}


function play() {
    addClass('home-screen');
    removeClass('play-ground');
    continueplay()
}