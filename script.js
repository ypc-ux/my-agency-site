// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form validation (runs only on contact.html)
const form = document.getElementById("contact-form");

if (form) {
  const rules = {
    name: { label: "Name", check: (v) => v.trim().length > 0 },
    company: { label: "Company", check: (v) => v.trim().length > 0 },
    email: {
      label: "Work email",
      check: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    },
    building: { label: "What you're building", check: (v) => v.trim().length > 0 },
  };

  const successEl = document.getElementById("form-success");

  function showError(field, message) {
    const input = form.elements[field];
    const errorEl = document.getElementById(`${field}-error`);
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (errorEl) errorEl.textContent = message;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalid = null;

    Object.entries(rules).forEach(([field, rule]) => {
      const value = form.elements[field].value;
      const valid = rule.check(value);
      showError(field, valid ? "" : `${rule.label} is required${field === "email" ? " and must be valid" : ""}.`);
      if (!valid && !firstInvalid) firstInvalid = form.elements[field];
    });

    if (firstInvalid) {
      firstInvalid.focus();
      if (successEl) successEl.hidden = true;
      return;
    }

    // Placeholder submission. Replace with a real POST to [FORM ENDPOINT].
    if (successEl) {
      successEl.hidden = false;
      successEl.focus?.();
    }
    form.reset();
  });

  // Clear an error once the user starts correcting the field
  Object.keys(rules).forEach((field) => {
    form.elements[field].addEventListener("input", () => {
      if (form.elements[field].getAttribute("aria-invalid") === "true") {
        showError(field, "");
      }
    });
  });
}
