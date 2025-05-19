// Mostrar/ocultar contenido adicional de cada batalla
function mostrarInfo(boton) {
  const info = boton.nextElementSibling;
  const expanded = boton.getAttribute('aria-expanded') === 'true';
  boton.setAttribute('aria-expanded', !expanded);
  info.style.display = expanded ? 'none' : 'block';
  boton.textContent = expanded ? 'Ver más' : 'Ocultar';
}



// Cambiar color de la nav al hacer scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

// Resaltar enlace activo en el índice al hacer scroll
const secciones = document.querySelectorAll(".batalla");
const enlaces = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 120;

  secciones.forEach((seccion) => {
    const id = seccion.id;
    const top = seccion.offsetTop;
    const bottom = top + seccion.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      enlaces.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
});

// Mostrar el botón "ir arriba"
const botonArriba = document.getElementById("ir-arriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botonArriba.style.display = "block";
  } else {
    botonArriba.style.display = "none";
  }
});

// Animación al hacer scroll (Intersection Observer)
const batallas = document.querySelectorAll(".batalla");

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observer.unobserve(entrada.target);
    }
  });
},{
  threshold: 0.3,
});

batallas.forEach((batalla) => observer.observe(batalla));


