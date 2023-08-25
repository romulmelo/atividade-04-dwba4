class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallbacl() {
    this.innerHTML = ``;
  }
}

customElements.define('p-footer', Footer);