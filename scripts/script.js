//Criar variáveis e pegar IDs
const sidebar = document.getElementById("sidebar");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

//Criar evento para abrir e fechar menu
openMenu.addEventListener("click", () => {
    sidebar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    sidebar.classList.remove("active");
});