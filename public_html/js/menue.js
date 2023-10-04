window.onscroll = function() {onScroll()};

function onScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { document.body.classList.add("scroll"); } 
  else { document.body.classList.remove("scroll"); }
} 