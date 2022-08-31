var bot = document.getElementById('sb')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      bot.style.display = "block";
    } else {
      bot.style.display = "none";
    }
}

function baixo() {
    document.body.scrollTop = 800;
    document.documentElement.scrollTop = 800;
}

var bot2 = document.getElementById('cm')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      bot2.style.display = "block";
    } else {
      bot2.style.display = "none";
    }
}

function cima() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//BOTAO DE CONTINUAR
var bot3 = document.getElementById('ct')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      bot3.style.display = "block";
    } else {
      bot3.style.display = "none";
    }
}

function continuar() {
    document.body.scrollTop = 2000;
    document.documentElement.scrollTop = 2000;
}