// GRAB TEMPLATE
let porto_template = document.getElementById('porto-template');
let modal_template = document.getElementById('modal-template');

let pos_porto = document.getElementById('porto-block');
let pos_modal = document.getElementById('modal-block');

// DATA
let kontens = {
    "it-convert":{
              "judul":"IT-Convert",
              "gambar":"assets/images/porto/it-convert.jpg",
              "narasi":"Website lomba ITConvert.id merupakan kompetisi IT dengan skala nasional yang diadakan oleh himpunan mahasiswa sistem informasi (HIMASIF) Universitas Jember.<br> Kontribusi saya dalam proyek ini meliputi front-end programmer, dan deployment melalui cpanel.",
              "btn_name":"Link Website",
              "btn_link":"https://itconvert.id",
              "kategori":['system','lomba', 'website']
            },
    "naraku":{
              "judul":"Naraku",
              "gambar":"assets/images/porto/naraku.jpg",
              "narasi":"Website PupukNaraku.com merupakan bentuk pengabdian dari program PKM 2020 yang telah didanai. Layanan dari website ini meliputi pengelolaan pembelian yang nantinya diarahkan pada whatsapp pengelola produksi, dan sistem penunjang keputusan untuk produksi dengan algoritma Simplex. Kontribusi saya dalam proyek ini adalah Fullstack Developer.",
              "btn_name":"Menuju Website",
              "btn_link":"https://pupuknaraku.com",
              "kategori":['pengabdian','PKM', 'website']
            },
    "task-force":{
              "judul":"Task Force",
              "gambar":"assets/images/porto/task-force.jpg",
              "narasi":"Task Force merupakan website yang dikembangkan untuk membantu mengorganisir pendaftaran lomba, pengumpulan proposal lomba, penjurian karya, hingga pembagian jadwal presentasi.",
              "btn_name":"Menuju webite",
              "btn_link":"http://taskforce.kulacino.my.id",
              "kategori":['system','lomba', 'website']
            },
    "journal":{
              "judul":"OJS Journal",
              "gambar":"assets/images/porto/journal.jpg",
              "narasi":"Beberapa website berbasis OJS yang sedang saya kelolah, berikut salah satu contohnya. Untuk contoh lain dapat dikunjungi pada laman berikut.",
              "btn_name":"Repositori Laman OJS",
              "btn_link":"https://github.com/darkun7/ojs-theme",
              "kategori":['ojs','journal']
            },
    "finding-legends":{
              "judul":"Finding Legends",
              "gambar":"assets/images/porto/finding-legends.jpg",
              "narasi":"Permainan Finding Legends: Fact Behind History merupakan edukasi science fiksi mengenai sejarah yang dimuat dalam permainan gawai. Permainan ini diikut sertakan pada kompetisi nasional yang diadakan oleh Kemendikbud yaitu Gemastik XIII. Kontribusi saya dalam pengembangan permainan ini meliputi Team Lead, Game Artist, dan Support Programmer.",
              "btn_name":"Video Prototype",
              "btn_link":"https://www.youtube.com/watch?v=CeNCVHNhIdc",
              "kategori":['edu-game','godot', 'sejarah']
            },
    "pahamdna":{
              "judul":"DNA Assemble",
              "gambar":"assets/images/porto/paham-dna.jpg",
              "narasi":"DNA Assemble merupakan game edukasi berbasis website dengan konsep simulasi penyusunan basa nukleotida.",
              "btn_name":"Mainkan Game",
              "btn_link":"http://paham-dna.kulacino.my.id/",
              "kategori":['edu-game','godot', 'biologi']
            },

}

// GENERATOR
for(var key in kontens) {
      var konten = kontens[key];

      // GET PORTO ELEMENT
      var porto = porto_template.content.cloneNode(true);
      var bg      = porto.querySelector('article');
      var action  = porto.querySelector('section');
      var judul_p = porto.querySelector('.porto-title');
      // SETUP
      console.log(konten['gambar'])
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
      console.log(porto);
      pos_porto.appendChild(porto)
      console.log(modal);
      pos_modal.appendChild(modal)
    }
