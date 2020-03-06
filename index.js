
let clickTime = 0;
function easterEgg(){
    if (++clickTime == 12) {
        document.getElementById('bg').setAttribute('style', 'z-index: 99999;');
        document.getElementById('name').innerHTML = "快……刷新……页面……！";
        document.getElementById('avatar').setAttribute('style', 'animation: rotate 1s infinite ease-in-out alternate;')
        clickTime = 0;
        boHeight = document.getElementById('bg').height / 2;
    }
}