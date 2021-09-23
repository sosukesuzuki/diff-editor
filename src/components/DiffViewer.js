import { html } from "../html.js";
import { styled } from "goober";

const DiffViewerContainer = styled("div")`
  font-family: Menlo, Monaco, "Courier New", monospace, "Segoe UI", Tahoma,
    Geneva, Verdana, sans-serif;
`;
const AddedLine = styled("p")`
  color: green;
`;
const RemovedLine = styled("p")`
  color: red;
`;
const DiffLine = styled("p")`
  white-space: pre-wrap;
`;

export function DiffVieweer({ diffs }) {
  return html`<${DiffViewerContainer}>
    ${diffs.map((diff) => {
      if (diff.removed) {
        return diff.value
          .split("\n")
          .map((diffLine) => html`<${RemovedLine}>- ${diffLine}<//>`);
      } else if (diff.added) {
        return diff.value
          .split("\n")
          .map((diffLine) => html`<${AddedLine}>- ${diffLine}<//>`);
      } else {
        return html`<${DiffLine}>${diff.value}<//>`;
      }
    })}
  <//>`;
}
