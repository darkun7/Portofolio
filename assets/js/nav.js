const WEB_PAGE_URL = window.location.href.split('?')[0]
const WEB_URL = window.location.href.split('/')[0]+"//"+
                window.location.href.split('/')[1]+
                window.location.href.split('/')[2]

var isActive = false;
function toggleNav(){
  let menu = document.querySelector('.menu');
  let body = document.querySelector('body');
  if (isActive){
    menu.classList.remove("active");
    body.classList.remove("menu-open");
  }else{
    menu.classList.add("active");
    body.classList.add("menu-open");
  }
  isActive = !isActive;
}

if (WEB_URL == "https://darkun7.github.io") {
  if (window.location.href.split('/')[4] != "") {
    var navul = document.querySelector("nav")
    var nav = navul.querySelector("ul").children
    for (var i = 0; i < nav.length; i++) {
      var a = nav[i].querySelector('a')
      if (a.href.split('#').length==2) {
        a.href = WEB_URL+"/Portofolio#"+a.href.split('#')[1]
      }
    }
  }    
}