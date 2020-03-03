
let clickTime = 0;
function easterEgg(){
    if (++clickTime == 10) {
        document.getElementById('avatar').setAttribute('class', 'easter-Egg-Avatar');
        clickTime = 0;
    }
}