let i = true;

function appear() {
  if (i == true) {
    document.getElementById("rectangle").style.visibility = "visible";
    document.getElementById("triangle").style.visibility = "visible";
    i = false;
  } else {
    document.getElementById("rectangle").style.visibility = "hidden";
    document.getElementById("triangle").style.visibility = "hidden";
    i = true;
  }
}

appear();
