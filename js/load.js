let i = 1;
progress = () => {
    if (i > 99) {
        clearInterval(id);
        i = 0;
        id = setInterval(progress, 90);
    }
    else {
        i++;
        document.querySelector('.pro').innerHTML = i + '%';
        document.querySelector('.progress').style.width = i + '%';
    }
}
let id = setInterval(progress, 90);	