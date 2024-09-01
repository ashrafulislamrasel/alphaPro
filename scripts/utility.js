function removeClass(elementID) {
    let element = document.getElementById(elementID);
    element.classList.remove('hidden');
}
function addClass(elementID) {
    let element = document.getElementById(elementID);
    element.classList.add('hidden');
}
function setBaclgroundColor(elementID) {
    let element = document.getElementById(elementID);
    element.classList.add('bg-orange-400');
}
function removeBaclgroundColor(elementID) {
    let element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400');
}

function randomAlphabets() {
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');

    let randomNumber = Math.random() * 25;
    let alphabetIndex = Math.round(randomNumber)
    
    let alphabet =  alphabets[alphabetIndex]
    return alphabet;
    
}
