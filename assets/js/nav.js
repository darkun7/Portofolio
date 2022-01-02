const WEB_PAGE_URL = window.location.href.split('?')[0]
const WEB_URL = window.location.href.split('/')[0]+"//"+
                window.location.href.split('/')[1]+
                window.location.href.split('/')[2]

var isActive = false;
function toggleNav() {
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

var navul = document.querySelector("nav");
var nav = navul.querySelector("ul").children;
var link_page = window.location.href.split('/').at(-1);
if (WEB_URL == "https://darkun7.github.io") {
  if (link_page != "") {
    //Not Page
    for (var i = 0; i < nav.length; i++) {
      var a = nav[i].querySelector('a');
      if (a.href.split('#').length==2) {
        a.href = WEB_URL+"/Portofolio#"+a.href.split('#')[1];
      }
    }
  } 
} else {
  if (link_page != "") {
    for (var i = 0; i < nav.length; i++) {
      var a = nav[i].querySelector('a');
      if (a.href.split('#').length==2) {
        a.href = WEB_URL+"/#"+a.href.replace('/', '').split('#')[1];
      }
    }
  }
}