export function init() {
  class Titulo extends HTMLElement {
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
          font-weight: 700;
          font-size: 52px;  
          margin: 10px 0;      
        }        
        `;

      var shadow = this.attachShadow({ mode: "open" });
      shadow.append(style);
      var titulo = document.createElement("h1");
      titulo.classList.add("root");
      titulo.textContent = textoOriginal;
      shadow.append(titulo);
    }
  }
  customElements.define("custom-titulo", Titulo);
}
