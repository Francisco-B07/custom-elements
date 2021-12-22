export function init() {
  class Parrafo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoOriginal = this.textContent;
      var style = document.createElement("style");
      style.textContent = `
          .root{
              font-family: 'Poppins', sans-serif;
              font-weight: 400;
              font-size: 18px;
              margin: 33px 0;        
            }        
            `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.append(style);
      var parrafo = document.createElement("h1");
      parrafo.classList.add("root");
      parrafo.textContent = textoOriginal;
      shadow.append(parrafo);
    }
  }
  customElements.define("custom-parrafo", Parrafo);
}
