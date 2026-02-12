
(function initContactLinks() {
  const { PROFILE } = window.PORTFOLIO_DATA || {};

  const email = (PROFILE?.email || "").trim();
  const whatsappPhone = (PROFILE?.whatsappPhone || "").trim();
  const linkedin = (PROFILE?.linkedin || "").trim();

  const waLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    "Hola Paola, vi tu portafolio"
  )}`;

  const mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  PROFILE?.email || ""
)}&su=${encodeURIComponent("Contacto desde tu portafolio")}`;


  function $(id) {
    return document.getElementById(id);
  }

  
  function setLink(id, href) {
    const el = $(id);
    if (!el) return;

    const tag = (el.tagName || "").toLowerCase();
    if (tag === "a") {
      el.setAttribute("href", href);
      
      el.removeAttribute("target");
      return;
    }

    
    el.style.cursor = "pointer";
    el.setAttribute("role", "link");
    el.setAttribute("tabindex", "0");

    const go = () => (window.location.href = href);

    el.addEventListener("click", go);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }
    });
  }

  
  if (whatsappPhone) {
    setLink("btnWhats", waLink);
    setLink("cardWhats", waLink);
  }

  if (email) {
    setLink("btnMail", mailLink);
    setLink("cardMail", mailLink);
  }

  if (linkedin) {
    setLink("btnLinked", linkedin);
    setLink("cardLinked", linkedin);
  }
})();
