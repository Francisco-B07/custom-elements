import { init as initHeader } from "./components/header";
import { init as initTitulo } from "./components/titulo";
import { init as initSubtitulo } from "./components/subtitulo";
import { init as initLarge } from "./components/large";
import { init as initInput } from "./components/input";
import { init as initOutlined } from "./components/outlined";
import { init as initButton } from "./components/button";
import { init as initFooter } from "./components/footer";
import { init as initParrafo } from "./components/parrafo";

(function () {
  initHeader();
  initTitulo();
  initSubtitulo();
  initLarge();
  initParrafo();
  initInput();
  initOutlined();
  initButton();
  initFooter();
})();
