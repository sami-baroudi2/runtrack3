document.addEventListener('keydown', function (event) {
    text = document.getElementById("keylogger");
    text.value += event.key
})