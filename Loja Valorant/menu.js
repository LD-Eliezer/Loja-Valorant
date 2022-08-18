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
    document.body.scrollTop = 945;
    document.documentElement.scrollTop = 945;
}