const links = [
  { href: "https://www.facebook.com/1chiton1/", icon: "../src/icons/logo.png" },
  { href: "index.html", text: "Inicio" },
  { href: "/about.html", text: "Acerca de" },
  { href: "/contact.html", text: "Contacto" },
];

function createNavLinks() {
  const navbar = document.getElementById("navbar");

  // Crea un arreglo de elementos html link que recibe cada link de links y le imprime su valor
  const linksHTML = links
    .map((link, index) => {
      if (index === 0 && link.icon) {
        // Si es el primer enlace y tiene un icono, se agrega la imagen
        return `
          <li>
            <a  href="${link.href}">
              <img src="${link.icon}" alt="icono" class="icon transform-white">
            </a>
          </li>
        `;
      } else {
        // En caso contrario, se agrega el texto del enlace
        return `
          <li>
            <a class="transform-white" href="${link.href}">
              ${link.text}
            </a>
          </li>
        `;
      }
    })
    .join("");

  // Crea el navbar y su ul y le mete los links creados
  const navHTML = `
    <ul class="navbar-links">
      ${linksHTML}
    </ul>
  `;

  // Se pega en el documento
  navbar.insertAdjacentHTML("beforeend", navHTML);
}

createNavLinks();
