class CustomElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
  }

  async connectedCallback() {
    const { shadowRoot } = this;
    const response = await fetch("template.html");
    this.shadowRoot.innerHTML = await response.text();
  }
}

customElements.define("custom-element", CustomElement);
