// GRAB TEMPLATE
const XLS_API = "https://dbdrive.herokuapp.com/xls"
const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"];

let blog_template = document.getElementById('blog-template');
let pos_blog = document.getElementById('blog-block');

// Link Opener
var queryString = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

// DATA
var formData = new FormData();
formData.append('xls','https://docs.google.com/spreadsheets/d/1DM_-HOWXMsPmshnIq-wfJq7Jtc4pacLC6bUC8c1XzpU/edit?usp=sharing');
formData.append('identifier', 'id');

let FullBlogs;

fetch(XLS_API,
    {
        body: formData,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
        method: "POST"
    }).then((res)=>res.json())
    .then(function(blogs) {
        FullBlogs = blogs.response;
        renderBlog();
        if (queryString["article"]!=null) {
            openBlog("blog-"+queryString["article"]);
        }
    });

function renderBlog() {
    var blogs = FullBlogs;
    document.querySelector('.opened').style.visibility = "hidden";
    pos_blog.querySelectorAll('*').forEach(n => n.remove());
    let length = FullBlogs.length-1;
    for(var key = length; length >= 0; key--) {
        if (key<0){
            break;
        }
        var blog = blogs[key];
        var content = blog_template.content.cloneNode(true);
        content.querySelector('.blog-item').id = "blog-"+key;
        content.querySelector('h2').textContent = blog['title'];
        content.querySelector('em').textContent = dateFormat(blog['date-created']);
        
        if (blog['thumbnail'] != 'nan') {
            var thumbnail = content.querySelector('.thumbnail');
            var img = "https://drive.google.com/uc?export=view&id="+blog['thumbnail'];
            thumbnail.style.background = "url("+img+")";
            thumbnail.style.backgroundPosition = "center";
            thumbnail.style.backgroundRepeat = "no-repeat";
            thumbnail.style.backgroundSize = "cover";
        }

        pos_blog.appendChild(content)
    }
}

function dateFormat(data) {
    var date = new Date(data)
    return date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear()
}

function openBlog(element) {
    blogId = parseInt(element.split("-")[1])
    pos_blog.querySelectorAll('*').forEach(n => n.remove());
    document.querySelector('.opened').style.visibility = "visible";
    var blog = FullBlogs[blogId];
    document.querySelector('.blog-title').innerHTML = blog['title'];
    document.querySelector('#date').innerHTML = dateFormat(blog['date-created']);

    document.querySelector('.share').id = blogId;
    document.querySelector('.uri').id = 'link-'+blogId;
    document.querySelector('#link-'+blogId).value = WEB_PAGE_URL+"?article="+blogId;

    converter = new showdown.Converter()
    document.querySelector('.blog-content').innerHTML = converter.makeHtml(blog['content']);
}