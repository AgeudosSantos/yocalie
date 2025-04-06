
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section.imagem");

    sections.forEach(function (section) {
        let offset = window.pageYOffset;
        section.style.backgroundPositionY = -(offset * 0.5) + "px";
    });
});