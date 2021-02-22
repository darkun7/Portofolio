var isActive = false;
function toggleNav(){
  let menu = document.querySelector('.menu');
  let body = document.querySelector('body');
  // var menu = document.getElementsByClassName("menu");
  // var body = document.getElementsByTagName("body");
  // console.log("Signal "+ isActive);
  if (isActive){
    menu.classList.remove("active");
    body.classList.remove("menu-open");
  }else{
    menu.classList.add("active");
    body.classList.add("menu-open");
  }
  isActive = !isActive;
}
