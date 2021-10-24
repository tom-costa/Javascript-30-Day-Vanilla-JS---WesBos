const keyboard = document.querySelector('.keyboard')

keyboard.addEventListener('keydown', e => {
    console.log(e)
    if (e.keyCode === 68){
        alert("you can't use that: " + e.key)
        e.preventDefault();
    }
})