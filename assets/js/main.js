function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
