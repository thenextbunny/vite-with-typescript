import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import _ from "lodash"; // When import without install @types/lodash, TypeScript returns an error
import Clipboard from "clipboard"; // Clipboard has types defines

// Lodash
console.log(_.difference([1, 45], [2, 1, 3]));

// Clipboard
const button = new Clipboard("button");

const handleCopy = (event: Clipboard.Event) => {
  setTimeout(() => alert(event.text), 500);
};

button.on("success", handleCopy);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button data-clipboard-target=".text" type="button">Copy text</button>
    </div>
    <p class="text">
      I am the text!
    </p>
  </div>
`;
