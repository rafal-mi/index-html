class CustomElement extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
  }

  async connectedCallback() {
    const { shadowRoot } = this;
    const node = document.getElementById("root");
    shadowRoot.appendChild(node);
  }

}

customElements.define('custom-element', CustomElement);
