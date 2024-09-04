function addClass(elementId) {
    let element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function removeClass(elementId) {
    let element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
function setBackgroundColor(elementId) {
    let element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function handlekeypress(event) {
    console.log(event.key);
    
}

document.addEventListener('keyup', handlekeypress )


function getRandomAlphabets() {
    
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let alphabetsArray = alphabets.split('');
    console.log(alphabetsArray);

    let randomNumbers = Math.random() * 26;
    let index = Math.round(randomNumbers);
    console.log(index);
    
    let alphabet = alphabetsArray[index];
    console.log(alphabet);
    return alphabet;
    

}