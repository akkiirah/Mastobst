let mobileOpen = document.getElementById('burger_menue');
let mobileClose = document.getElementById('mobile_close');
let mobileMenue = document.getElementById('mobile_menue');

const menueBackground = document.getElementById('menue_container-background');

window.onscroll = function() {onScroll()};
mobileOpen.addEventListener("click", openMenue);
mobileClose.addEventListener("click", closeMenue);

function onScroll() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { document.body.classList.add("scroll"); } 
  else { document.body.classList.remove("scroll"); }

  if(mobileMenue.classList.contains('mobile_hidden')) { return; }

} 

function closeMenue() {
  if(mobileMenue.classList.contains('mobile_hidden')) { return; }

  mobileMenue.classList.remove('mobile_open');
  mobileMenue.classList.add('mobile_hidden');

  menueBackground.style.backdropFilter  = 'blur(0)';
  menueBackground.style.opacity = '0';

  window.setTimeout(function() {
    menueBackground.style.display = 'none';
  }, 300);
}

function openMenue() {
  if(mobileMenue.classList.contains('mobile_open')) { return; }

  mobileMenue.classList.remove('mobile_hidden');
  mobileMenue.classList.add('mobile_open');

  menueBackground.style.display = 'block';
  menueBackground.style.opacity = '1';
  menueBackground.style.backdropFilter  = 'blur(.25em)';
}

const resizeObserver = new ResizeObserver((entries) => {
  if(!menueBackground || menueBackground.style.display == "none") { return; }
  
  if (menueBackground.style.display == "block" && document.body.clientWidth >= 900) { closeMenue(); }
});
resizeObserver.observe(document.body);