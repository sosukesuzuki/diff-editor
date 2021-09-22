import { render, h } from "preact";
import { setup } from "goober";
import { html } from "./html.js";
import { Header } from "./components/Header.js";

setup(h);

function App() {
  return html`
    <main>
      <${Header} />
    </main>
  `;
}

render(html`<${App} name="World" />`, document.body);
