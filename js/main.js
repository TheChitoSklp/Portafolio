const $navIndex = document.getElementById("navIndex");
console.log($navIndex);
const $navBarContacto = document.getElementById("navBarContacto");
let navBarIndex = `<div class="container-fluid text-light bg-dark">
<a class="logoName" id="colorText" href="https://www.facebook.com/1chiton1/"
  ><img class="transform-white" src="src/icons/logo.png" alt=""
/></a>
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a
        class="nav-link active transform-white"
        id="colorText"
        aria-current="page"
        href="#"
        >Incio</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link active transform-white"
        id="colorText"
        aria-current="page"
        href="./html/about.html"
        >Acerca de</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link active transform-white"
        id="colorText"
        aria-current="page"
        href="./contact.html"
        >Contacto</a
      >
    </li>
    <li class="nav-item dropdown">
      <a
        id="colorText"
        class="nav-link dropdown-toggle transform-white"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Portafolio
      </a>
      <ul class="dropdown-menu bg-dark">
        <li>
          <a class="dropdown-item" id="colorText" href="#">Generation proyect</a>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item" id="colorText" href="#">Other proyect</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
</div>`;
let navBarContacto = `<div class="container-fluid text-light bg-dark">
<a class="logoName" id="colorText" href="https://www.facebook.com/1chiton1/"
  ><img class="transform-white" src="src/icons/logo.png" alt=""
/></a>
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a
        class="nav-link active transform-white"
        id="colorText"
        aria-current="page"
        href="./index.html"
        >Incio</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link active transform-white"
        id="colorText"
        aria-current="page"
        href="./html/about.html"
        >Acerca de</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link active transform-white"
        id="colorText"
        aria-current="page"
        href="#"
        >Contacto</a
      >
    </li>
    <li class="nav-item dropdown">
      <a
        id="colorText"
        class="nav-link dropdown-toggle transform-white"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Portafolio
      </a>
      <ul class="dropdown-menu bg-dark">
        <li>
          <a class="dropdown-item" id="colorText" href="#">Generation proyect</a>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li>
          <a class="dropdown-item" id="colorText" href="#">Other proyect</a>
        </li>
      </ul>
    </li>
  </ul>
</div>
</div>`;
// Seleccionador de navbar dependiendo el html
if ($navIndex !== null) {
  $navIndex.insertAdjacentHTML("beforeend", navBarIndex);
} else if ($navBarContacto !== null) {
  $navBarContacto.insertAdjacentHTML("beforeend", navBarContacto);
} else {
}
// TODO corregir el problema de que agarra
