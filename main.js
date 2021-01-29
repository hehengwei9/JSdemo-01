var div1 = document.createElement('div');
document.body.appendChild(div1);
div1.className = 'demo'
document.body.onclick = function (e) {
    div1.style.top = e.clientY + "px"
    div1.style.left = e.clientX + "px"
}