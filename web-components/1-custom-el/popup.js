class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
  }

  async connectedCallback() {
    const { shadowRoot } = this;
    const response = await fetch("popup.html");
    shadowRoot.innerHTML = await response.text();
    let image = shadowRoot.getElementById("image");

    let imgUrl = this.hasAttribute("img") ? this.getAttribute("img") : "img/default.png";

    image.src = imgUrl;

    let info = shadowRoot.querySelector(".info");
    const text = this.getAttribute('data-text');
    info.textContent = text;

  }
}

customElements.define('popup-info', PopUpInfo);
