const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  // console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// panels.forEach(panel => panel.addEventListener('keypress', e => {
  //   console.log(e)
  //   if (e.keyCode === 68){
    //   panel[0].toggleOpen();
    //   }
    // }));
    
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// window.addEventListener('keydown', function(e) {
//     const onScreen = document.querySelector(`.panel[data-key="{e.keyCode}"]`);
//     console.log(onScreen);
// })

// const letterA = document.querySelector('.panel1')

// letterA.addEventListener('keypress', e => {
//   if (e.keyCode == 65){
//     toggleActive()
//   }
// })