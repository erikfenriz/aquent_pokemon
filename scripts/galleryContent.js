function galleryContent() {
    var d = document;
    var galleryContainer = d.getElementById("galleryContent");
    return function addImages(n) {
        if (n <= 3) {
            return;
        }
        var image = d.createElement("img");
        image.src = "../images/art" + n + ".jpg";
        // if (image.height > 0 || safari) {
        image.className = "main__gallery";
        galleryContainer.appendChild(image);

        // }
        n--;
        return addImages(n);

    }
};

var gallery = galleryContent();
gallery(25);
