import { html } from "../html.js";
import { styled } from "goober";

const CodeEditorContainer = styled("textarea")`
  resize: none;
  background-color: var(--gray-0);
  color: var(--gary-9);
  border: 1px solid var(--gray-4);
  height: 100%;
  font-size: 15px;
  font-family: Menlo, Monaco, "Courier New", monospace, "Segoe UI", Tahoma,
    Geneva, Verdana, sans-serif;
`;

export function CodeEditor({ value, onInput }) {
  return html`<${CodeEditorContainer} value=${value} onInput=${onInput} />`;
}
