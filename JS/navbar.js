let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos === 0 || (currentScrollPos > 0 && currentScrollPos < 120)) {
    document.getElementById("navbar").classList.remove("scrolled");
  } else {
    document.getElementById("navbar").classList.add("scrolled");
  }

  prevScrollpos = currentScrollPos;
};




function Links() {
  var x = document.querySelector(".x");
  var links = x.querySelectorAll("a");

  if (x.classList.contains("active")) {
    x.classList.remove("active");
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "none";
    }
  } else {
    x.classList.add("active");
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "block";
    }
  }
}

