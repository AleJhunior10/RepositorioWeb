const sign_in_btn = document.querySelector("#btn-Ingresar");
const sign_up_btn = document.querySelector("#btn-Registrar");
const container = document.querySelector(".contenedor");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});