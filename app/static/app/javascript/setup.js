import { myWindow } from "./myWindow.class.js";

document.onmousemove = on_mouse_move;
document.onmouseup = on_mouse_up;

function on_mouse_up(event) { 
    mouse_pos=0;
    mouse_down=false; 
}

function on_mouse_move(event) {
    var element = document.getElementById(square), tmpX, tmpY;
    if (mouse_down === true && mouse_pos === 0) {
        element.style.left = event.clientX - posX + 'px';
        element.style.top = event.clientY - posY + 'px';
    }
    else if (mouse_down === true && mouse_pos === 1) {
        tmpX = element.offsetLeft + element.offsetWidth ;
        tmpY = element.offsetTop + element.offsetHeight;
        element.style.width = tmpX + (event.clientX - element.offsetLeft - tmpX) + 'px';
        element.style.height = tmpY + (event.clientY - element.offsetTop - tmpY) + 'px';
    }
    else if (mouse_down === true && mouse_pos === 2) {
        tmpY = element.offsetTop + document.getElementById(square).offsetHeight;
        element.style.width = element.offsetWidth + (element.offsetLeft - event.clientX) + 'px';
        element.style.height = tmpY + (event.clientY - element.offsetTop - tmpY) + 'px';
        element.style.left = event.clientX + 'px';
        element.style.top = event.clientY - element.offsetHeight + 'px';
    }
    else if (mouse_down === true && mouse_pos === 3) {
        tmpY = element.offsetTop + element.offsetHeight;
        element.style.height = tmpY + (event.clientY - element.offsetTop - tmpY) + 'px';
    }
    else if (mouse_down === true && mouse_pos === 4) {
        element.style.width = element.offsetWidth + (element.offsetLeft - event.clientX) + 'px';
        element.style.left = event.clientX + 'px';
    }
    else if (mouse_down === true && mouse_pos === 5) {
        tmpX = element.offsetLeft + element.offsetWidth ;
        element.style.width = tmpX + (event.clientX - element.offsetLeft - tmpX) + 'px';
    }
    else if (mouse_down === true && mouse_pos === 6) {
        tmpX = element.offsetLeft + element.offsetWidth ;
        element.style.width = tmpX + (event.clientX - element.offsetLeft - tmpX) + 'px';
        element.style.height = element.offsetHeight + (element.offsetTop - event.clientY) + 'px';
        element.style.top = event.clientY + 'px';
    }
    else if (mouse_down === true && mouse_pos === 7) {
        element.style.width = element.offsetWidth + (element.offsetLeft - event.clientX) + 'px';
        element.style.left = event.clientX + 'px';
        element.style.height = element.offsetHeight + (element.offsetTop - event.clientY) + 'px';
        element.style.top = event.clientY + 'px';
    }
    else if (mouse_down === true && mouse_pos === 8) {
        element.style.height = element.offsetHeight + (element.offsetTop - event.clientY) + 'px';
        element.style.top = event.clientY + 'px';
    }
}