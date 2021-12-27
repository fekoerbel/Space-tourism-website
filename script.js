var header = document.getElementById("act-ul");
var btns = header.getElementsByClassName("act-effect");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active-menu");
    current[0].className = current[0].className.replace(" active-menu", "");
    this.className += " active";
  });
}

var subHeader = document.getElementById("act-sub-ul");
var subBtns = subHeader.getElementsByClassName("act-sub-effect");
for (var i = 0; i < subBtns.length; i++) {
  subBtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("sub-active");
    current[0].className = current[0].className.replace(" sub-active", "");
    this.className += " sub-active";
  });
}

document.querySelectorAll('.internal').forEach(link => {
  link.onclick = function (e) {
    e.preventDefault()
    fetch(link.href)
      .then(resp => {
        return resp.text()
      })
      .then(responseText => {
        var parsedResponse = (new window.DOMParser()).parseFromString(responseText, "text/html");
        document.getElementById("planets").innerHTML = parsedResponse.getElementsByTagName("section")[0].innerHTML;

      })
  }
})