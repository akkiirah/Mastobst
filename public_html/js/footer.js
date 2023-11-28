let topLink = document.getElementById("toplink");
topLink.addEventListener("click", topFunction);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}