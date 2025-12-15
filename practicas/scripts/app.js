// Referencias a elementos
const form = document.getElementById("registerForm");
const alertBox = document.getElementById("alert");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

// Función para mostrar alertas
function showAlert(message, type) {
  alertBox.textContent = message;
  alertBox.className = `alert alert--${type}`;
  alertBox.classList.remove("hidden");
}

// Ocultar alerta
function hideAlert() {
  alertBox.classList.add("hidden");
}

// Evento submit del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener valores
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const role = document.getElementById("role").value;
  const terms = document.getElementById("terms").checked;

  // Validaciones
  if (name === "" || email === "" || role === "") {
    showAlert("Todos los campos son obligatorios.", "error");
    return;
  }

  if (!email.includes("@")) {
    showAlert("Ingrese un correo electrónico válido.", "error");
    return;
  }

  if (!terms) {
    showAlert("Debe aceptar los términos y condiciones.", "error");
    return;
  }

  // Si todo está correcto
  hideAlert();
  showAlert("Usuario registrado correctamente.", "success");

  // Mostrar modal
  modal.classList.add("active");
});

// Cerrar modal
closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  form.reset();
  hideAlert();
});

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
