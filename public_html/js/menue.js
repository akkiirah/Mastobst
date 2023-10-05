let mobileOpen = document.getElementById('burger_menue');
let mobileClose = document.getElementById('mobile_close');
let mobileMenue = document.getElementById('mobile_menue');

window.onscroll = function() {onScroll()};
mobileOpen.addEventListener("click", openMenue);
mobileClose.addEventListener("click", closeMenue);

function onScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { document.body.classList.add("scroll"); } 
  else { document.body.classList.remove("scroll"); }

  if(mobileMenue.classList.contains('mobile_hidden')) { return; }

  disableScroll();
} 

function closeMenue() {
  if(mobileMenue.classList.contains('mobile_hidden')) { return; }

  mobileMenue.classList.remove('mobile_open');
  mobileMenue.classList.add('mobile_hidden');

}

function openMenue() {
  if(mobileMenue.classList.contains('mobile_open')) { return; }

  mobileMenue.classList.remove('mobile_hidden');
  mobileMenue.classList.add('mobile_open');
}