export function init() {
  class Outlined extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoOriginal = this.textContent;
      var style = document.createElement("style");
      style.textContent = `
      .root{
        display: flex;
        align-items: center;
        justify-content: center; 
        border: 2px solid #000000;
        border-radius: 4px;
        Width: 312px;
        Height: 55px;
        font-family: Roboto;
        font-weight: 500;
        font-size: 22px;
        margin-top: 70px;
        margin-bottom: 60px;
        
        
        }

      @media (min-width: 600px) {
            .root{
              Width: 353px;
              margin-bottom: 70px;

            }
        }
        `;
      var shadow = this.attachShadow({ mode: "open" });

      shadow.append(style);
      var div = document.createElement("div");
      div.textContent = textoOriginal;
      div.classList.add("root");
      shadow.append(div);
    }
  }
  customElements.define("custom-outlined", Outlined);
}
