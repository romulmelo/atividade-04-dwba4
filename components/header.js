class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header__container">
          <img
            class="header__logo"
            src="https://atividade-04-dwba4.romulmelo.repl.co/static/img/logo.png"
            alt="Instituto Federal São Paulo"
            title="Instituto Federal São Paulo"
            aria-label="Logo" 
          />
          <nav class="header__nav">
            <ul class="header__nav__list">
              <li class="header__nav__item">
                <a class="header__nav__link" href="https://atividade-04-dwba4.romulmelo.repl.co/">Home</a>
              </li>
              <li class="header__nav__item">
                <a class="header__nav__link" href="https://atividade-04-dwba4.romulmelo.repl.co/pages/events.html">Eventos</a>
              </li>
              <li class="header__nav__item">
                <a class="header__nav__link" href="https://atividade-04-dwba4.romulmelo.repl.co/pages/contact.html">Contato</a>
              </li>
              <li class="header__nav__item">
                <a class="header__nav__link" href="https://atividade-04-dwba4.romulmelo.repl.co/pages/about.html">Sobre</a>
              </li>
              <li class="header__nav__item">
                <a
                  class="header__nav__link header__nav__link--highlighted"
                  href="https://atividade-04-dwba4.romulmelo.repl.co/pages/login"
                >
                  Entrar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>`;
  }
}

customElements.define('p-header', Header);