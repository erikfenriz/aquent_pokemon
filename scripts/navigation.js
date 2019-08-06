function expandableMenu() {
    var x = document.getElementById("expandableLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

onload = function () {
    var x = document.getElementById("expandableLinks");
    x.style.display = "none";
}