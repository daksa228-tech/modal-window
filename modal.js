function openOverlay() {
    document.documentElement.style.overflowY = "hidden"
    body.classList.add("body--active");
    modal.classList.add(modal--active);
}
function openOverlay() {
    document.documentElement.style.overflowY = "scroll"
    body.classList.remove("body--active");
    modal.classList.remove(modal--active);
}

overlayBtb.addEventListener("click", () => openOverlay());
overlayCloseBtb.addEventListener("click", () => openOverlay());

document.addEventListener("keydown", () => openOverlay());