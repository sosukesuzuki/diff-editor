import { html } from "../html.js";
import { styled } from "goober";

const Heading1 = styled("h1")`
  color: black;
  background-color: gray;
`;

export function Header() {
  return html`<nav><${Heading1}>Diff Editor<//></nav>`;
}
