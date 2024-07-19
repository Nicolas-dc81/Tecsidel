var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var imageInfo = document.getElementById("imageInfo");

function openModal(imageSrc) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    modal.style.display = "none";
}
