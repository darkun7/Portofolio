/* DISCLAIMER */
/*
* Style modal dan JS saya menggunakan file yang pernah saya gunakan sebelumnya pada
* https://github.com/darkun7/darkun7.github.io/blob/master/assets/css/main.css
*/
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
      modal[i].style.transition = "opacity 0.3s ease-in-out";
      let delayres = await delay(150);
      modal[i].style.display = "none";
  }
}

async function modalOpen(element) {
  var target = document.getElementById('modal-block').querySelector('#'+element);
  console.log(target);
  target.style.display = "flex";
  target.style.opacity = 1;
  target.firstElementChild.style.animation = "bounceIn 0.4s";
  target.style.transition = "opacity 0.3s ease-in-in";
  let delayres = await delay(150);
}
