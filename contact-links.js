(function initContactLinks() {
  const { PROFILE } = window.PORTFOLIO_DATA || {};

  const email = (PROFILE?.email || "").trim();
  const whatsappPhone = (PROFILE?.whatsappPhone || "").trim();
  const linkedin = (PROFILE?.linkedin || "").trim();

  const waLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    "Hola Paola, vi tu portafolio"
  )}`;

  const subject = "Contacto desde tu portafolio";
  const body = "Hola Paola,\n\nVi tu portafolio y me gustaría ponerme en contacto.\n\nSaludos,";

  const mailtoLink =
    `mailto:${email}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  function $(id) {
    return document.getElementById(id);
  }

  function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function setLink(id, href, fallbackHref) {
    const el = $(id);
    if (!el) return;

    const tag = (el.tagName || "").toLowerCase();

    const go = () => {
      
      if (fallbackHref) {
        const before = document.visibilityState;
        window.location.href = href;

        setTimeout(() => {
          
          if (document.visibilityState === before) {
            window.open(fallbackHref, "_blank", "noopener,noreferrer");
          }
        }, 600);

        return;
      }

      window.location.href = href;
    };

    if (tag === "a") {
      el.setAttribute("href", href);
      el.removeAttribute("target");
      el.setAttribute("rel", "noopener");
      el.addEventListener("click", (e) => {
       
        if (fallbackHref) {
          e.preventDefault();
          go();
        }
      });
      return;
    }

    el.style.cursor = "pointer";
    el.setAttribute("role", "link");
    el.setAttribute("tabindex", "0");
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
    
    const primaryMail = mailtoLink;
    const fallbackMail = isMobile() ? null : gmailLink;

    setLink("btnMail", primaryMail, fallbackMail);
    setLink("cardMail", primaryMail, fallbackMail);
  }

  if (linkedin) {
    setLink("btnLinked", linkedin);
    setLink("cardLinked", linkedin);
  }
})();
