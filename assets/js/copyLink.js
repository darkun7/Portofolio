function copyLink(target) {
    console.log(target)
    var copyText = document.getElementById("link-"+target);
    copyText.style.display = 'block';
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyText.style.display = 'none';
    alert("Url Disalin: " + copyText.value);
}
