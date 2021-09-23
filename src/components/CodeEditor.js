import { html } from "../html.js";
import { styled } from "goober";

const CodeEditorContainer = styled("textarea")`
  resize: none;
  background-color: black;
  color: white;
  font-family: Menlo, Monaco, "Courier New", monospace, "Segoe UI", Tahoma,
    Geneva, Verdana, sans-serif;
`;

export function CodeEditor({ value, onInput }) {
  return html`<${CodeEditorContainer} value=${value} onInput=${onInput} />`;
}
