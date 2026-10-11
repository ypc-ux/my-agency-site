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

  const formErrorEl = document.getElementById("form-error");
  const submitBtn = form.querySelector('[type="submit"]');
  const originalLabel = submitBtn ? submitBtn.textContent : "";

  function setFormError(message) {
    if (formErrorEl) formErrorEl.textContent = message || "";
  }

  function footerEmailAddress() {
    const link = document.querySelector("footer a[href^='mailto:']");
    if (!link) return "";
    return (link.getAttribute("href") || "").replace(/^mailto:/i, "").split("?")[0];
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const honeypot = form.elements.company_website;
    if (honeypot && honeypot.value !== "") return;

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
      setFormError("");
      return;
    }

    // The action attribute must be set to the real endpoint URL before launch.
    const action = form.getAttribute("action") || "";
    if (action.includes("[FORM ENDPOINT]")) {
      if (successEl) successEl.hidden = true;
      setFormError("This form isn't set up yet.");
      return;
    }

    const payload = {};
    new FormData(form).forEach((value, key) => {
      if (key === "company_website") return;
      payload[key] = value;
    });
    payload._captcha = "false";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }
    if (successEl) successEl.hidden = true;
    setFormError("");

    // Named fields as JSON. The format may need to change to match the endpoint provider.
    fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Request failed");
        setFormError("");
        if (successEl) {
          successEl.hidden = false;
          successEl.focus?.();
        }
        form.reset();
      })
      .catch(() => {
        if (successEl) successEl.hidden = true;
        const address = footerEmailAddress();
        setFormError(
          address
            ? `This didn't send. Email ${address}.`
            : "This didn't send. Email the address in the footer."
        );
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        }
      });
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
