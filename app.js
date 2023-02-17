let mobileMenu = document.getElementById("mobile-menu")
let menuOpen = document.getElementById("mobile-menu-icon")
let menuClose = document.getElementById("close-mobile-menu-icon")

menuOpen.addEventListener("click", () => {
  mobileMenu.classList.add("visible") // lägger på klassen visible
})

menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("visible") // tar bort klassen visible
})
