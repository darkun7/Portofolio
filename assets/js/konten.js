function loadJSON(path, callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send("Nodata");  
 }


// GRAB TEMPLATE
let porto_template = document.getElementById('porto-template');
let modal_template = document.getElementById('modal-template');

let pos_porto = document.getElementById('porto-block');
let pos_modal = document.getElementById('modal-block');

// DATA
function init() {
 loadJSON('assets/konten.json', function(response) {
    var kontens = JSON.parse(response);
	generator(kontens);
	//customModal();
	console.log("See detailed document here: "+'https://drive.google.com/drive/folders/1XOGTcEVauRJMj83c0G1v_ckrnPqcwVDq?usp=sharing');
 });
}

init();
// GENERATOR MODAL UMUM
function customModal(){
	var umum = {
	}
	// GET MODAL ELEMENT
	for(var key in umum) {
		var modal = modal_template.content.cloneNode(true);;
		var img     = modal.querySelector('img');
		var block_m = modal.querySelector('.modal');
		var judul_m = modal.querySelector('h3');
		var isi     = modal.querySelector('p');
		var button  = modal.querySelector('.button');
		var category= modal.querySelector('#kat');
	}
	
}

// GENERATOR KONTEN
function generator(kontens){
	for(var key in kontens) {
		  var konten = kontens[key];
		  konten['gambar'] = "https://drive.google.com/uc?export=view&id="+konten['gambar'];
		  // GET PORTO ELEMENT
		  var porto = porto_template.content.cloneNode(true);
		  var bg      = porto.querySelector('article');
		  var action  = porto.querySelector('section');
		  var judul_p = porto.querySelector('.porto-title');
		  // SETUP
		  bg.style.background = "url("+konten['gambar']+")";
		  bg.style.backgroundPosition = "center";
		  bg.style.backgroundRepeat = "no-repeat";
		  bg.style.backgroundSize = "cover";
		  action.id = key;
		  judul_p.innerHTML = konten['judul'];

		  // GET MODAL ELEMENT
		  var modal = modal_template.content.cloneNode(true);;
		  var img     = modal.querySelector('img');
		  var block_m = modal.querySelector('.modal');
		  var judul_m = modal.querySelector('h3');
		  var isi     = modal.querySelector('p');
		  var button  = modal.querySelector('.button');
		  var category= modal.querySelector('#kat');
		  // SETUP
		  img.src = konten['gambar'];
		  block_m.id = key;
		  judul_m.innerHTML = konten['judul'];
		  isi.innerHTML = konten['narasi'];
		  button.href = konten['btn_link'];
		  button.innerHTML = konten['btn_name'];

		  var kat = '';
		  for(var i in konten['kategori']) {
			kat +="<code>"+konten['kategori'][i]+"</code>";
		  }
		  category.innerHTML = kat;
		  pos_porto.appendChild(porto)
		  pos_modal.appendChild(modal)
		}
}
