// nav bar! //
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// menu icon !
function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  sidenav.style.width = sidenav.style.width === "250px" ? "0" : "250px";

  var menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("change");
}