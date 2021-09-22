import { html } from "../html.js";
import { styled } from "goober";
import { Header } from "./Header.js";
import { Details } from "./Details.js";

const AppContainer = styled("main")``;

export function App() {
  return html`
    <${AppContainer}>
      <${Header} />
      <${Details} />
    <//>
  `;
}
