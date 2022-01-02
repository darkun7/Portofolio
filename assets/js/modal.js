async function delay(delayInms) {
      return new Promise(resolve  => {
        setTimeout(() => {
          resolve(1);
        }, delayInms);
      });
    }

async function modalClose() {
  var modal = document.getElementsByClassName("modal");
  for(var i=0; i<modal.length; i++) {
      modal[i].style.opacity = 0;
      modal[i].style.transition = "opacity 0.2s ease-in-out";
      let delayres = await delay(150);
      modal[i].style.display = "none";
  }
}

async function modalOpen(element) {
  var target = document.getElementById('modal-block').querySelector('#'+element);
  target.style.display = "flex";
  target.style.opacity = 1;
  target.firstElementChild.style.animation = "bounceIn 0.2s";
  target.style.transition = "opacity 0.1s ease-in-in";
  let delayres = await delay(150);
}
