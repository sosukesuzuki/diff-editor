import { html } from "../html.js";
import { styled } from "goober";

const HeaderContainer = styled("nav")`
  padding: 20px;
`;
const Heading1 = styled("h1")`
  color: black;
  font-size: 15px;
`;

export function Header() {
  return html`<${HeaderContainer}><${Heading1}>Diff Editor<//><//>`;
}
