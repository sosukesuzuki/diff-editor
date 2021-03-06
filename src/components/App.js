import { html } from "../html.js";
import { styled } from "goober";
import { Header } from "./Header.js";
import { Details } from "./Details.js";

const AppContainer = styled("main")`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

export function App() {
  return html`
    <${AppContainer}>
      <${Header} />
      <${Details} />
    <//>
  `;
}
