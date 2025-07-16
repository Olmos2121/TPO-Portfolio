emailjs.init("wgkaL0VEjdn9nb187");

function abrirModal() {
  document.getElementById("modalContacto").classList.remove("hidden");
}
function cerrarModal() {
  document.getElementById("modalContacto").classList.add("hidden");
}

fetch("/Assets/modals/modal-contacto.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("modal-container").innerHTML = html;

    document
      .getElementById("form-contacto")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_2jubnus",
            "template_cobq5rw",
            "#form-contacto",
            "wgkaL0VEjdn9nb187"
          )
          .then(() => {
            alert("Mensaje enviado correctamente");
            cerrarModal();
            this.reset();
          })
          .catch((error) => {
            alert("Error al enviar: " + error.text);
          });
      });
  });

function abrirModal() {
  const modal = document.getElementById("modalContacto");
  modal.classList.remove("hidden");

  modal.addEventListener("click", cerrarSiClicFuera);
}

function cerrarModal() {
  const modal = document.getElementById("modalContacto");
  modal.classList.add("hidden");
  modal.removeEventListener("click", cerrarSiClicFuera);
}

function cerrarSiClicFuera(e) {
  const contenido = document.querySelector(".modal-content");
  if (!contenido.contains(e.target)) cerrarModal();
}
