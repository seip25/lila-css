function lila(component, options) {
  if (component === "snackbar") {
    let snackbar = document.getElementById("snackbar");

    if (!snackbar) {
      snackbar = document.createElement("div");
      snackbar.id = "snackbar";
      document.body.appendChild(snackbar);
    }

    snackbar.className = "show";

    if (options.type) {
      snackbar.classList.add(options.type);
    } else {
      snackbar.classList.add("info");
    }

    snackbar.textContent = options.message || "";
    setTimeout(() => {
      snackbar.classList.add("show");
    }, 10);

    const duration = options.duration || 3000;
    if (snackbar.timeoutId) {
      clearTimeout(snackbar.timeoutId);
    }

    snackbar.timeoutId = setTimeout(function () {
      snackbar.className = "";
    }, duration);
  }
}
