var agora = new Date();
var hora = agora.getHours();
var hr = window.document.getElementById('hr');
var img01 = window.document.getElementById('img01');
var img02 = window.document.getElementById('img02');
var img03 = window.document.getElementById('img03');
//var hora = 8
hr.innerHTML = `Agora são ${hora}`

if(hora < 12){
    img01.style.display = 'block';
}else if(hora <= 18){
    img02.style.display = 'block';
}else {
    img03.style.display = 'block';
};