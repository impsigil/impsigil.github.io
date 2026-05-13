(function () {
  const STORAGE_KEY = "impsig_tpe_docs_age_verified";

  function hideGate() {
    const gate = document.getElementById("age-gate");
    if (gate) {
      gate.classList.add("is-hidden");
      gate.setAttribute("aria-hidden", "true");
    }
  }

  function showGate() {
    const gate = document.getElementById("age-gate");
    if (gate) {
      gate.classList.remove("is-hidden");
      gate.setAttribute("aria-hidden", "false");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const accepted = localStorage.getItem(STORAGE_KEY) === "yes";

    if (accepted) {
      hideGate();
      return;
    }

    showGate();

    const acceptButton = document.getElementById("age-gate-accept");
    const rejectButton = document.getElementById("age-gate-reject");

    if (acceptButton) {
      acceptButton.addEventListener("click", function () {
        localStorage.setItem(STORAGE_KEY, "yes");
        hideGate();
      });
    }

    if (rejectButton) {
      rejectButton.addEventListener("click", function () {
        window.location.href = "https://www.google.com";
      });
    }
  });
})();
