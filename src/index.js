import { render, h } from "preact";
import { setup } from "goober";
import { html } from "./html.js";
import { App } from "./components/App.js";

setup(h);

render(html`<${App} />`, document.body);
