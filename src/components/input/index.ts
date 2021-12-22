export function init() {
  class Input extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const textoLabel = this.getAttribute("label");
      const textoInput = this.getAttribute("placeholder");

      var style = document.createElement("style");
      style.textContent = `
      .input{
          border: 2px solid #000000;
          border-radius: 4px;
          Width: 312px;
          Height: 55px;
          font-family: Roboto;
          font-size: 18px;
          color: #CCCCCC;
          
        }
        @media (min-width: 600px) {
          .input{
            Width: 353px;
          }
        }
        
        .label{
        margin-top:83px;
        font-family: Roboto;
        font-size: 18px;
        display: block;
      }
     `;
      var shadow = this.attachShadow({ mode: "open" });

      shadow.append(style);
      var labelEL = document.createElement("label");
      labelEL.textContent = textoLabel;
      labelEL.classList.add("label");

      var inputEL = document.createElement("input");
      inputEL.placeholder = textoInput;
      inputEL.classList.add("input");
      shadow.append(labelEL);
      shadow.append(inputEL);
    }
  }
  customElements.define("custom-input", Input);
}
