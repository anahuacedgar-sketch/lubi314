// ============================
// WhatsApp (sin mensaje)
// ============================
const PHONE = document.body?.dataset.phone || "5215657064991"; // número oficial
const whatsappUrl = `https://wa.me/${PHONE}`;

const ctaIds = ["cta-hero", "cta-contacto", "cta-sticky"];

ctaIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute("href", whatsappUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }
});

// ============================
// Año en footer
// ============================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ============================
// Carruseles (prev/next)
// ============================
const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector(".carousel-btn.prev");
  const next = carousel.querySelector(".carousel-btn.next");

  if (!track || !prev || !next) return;

  const getStep = () => {
    const slide = track.querySelector(".carousel-slide");
    if (!slide) return track.clientWidth;
    return slide.getBoundingClientRect().width + 16;
  };

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -getStep(), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: getStep(), behavior: "smooth" });
  });
});
