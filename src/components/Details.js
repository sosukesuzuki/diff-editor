import { html } from "../html.js";
import { useState, useCallback } from "preact-hooks";
import { styled } from "goober";
import { CodeEditor } from "./CodeEditor.js";
import { DiffVieweer } from "./DiffViewer.js";
import { useDiffs } from "../hooks/useDiff.js";

const DetailsContainer = styled("div")`
  display: flex;
  height: 100%;
`;
const Column = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  padding: 10px;
`;
const ColumnTitle = styled("p")`
  padding-bottom: 10px;
`;

export function Details() {
  const [originalText, setOriginalText] = useState("");
  const updateOriginalText = useCallback(
    (e) => {
      setOriginalText(e.target.value);
    },
    [setOriginalText]
  );
  const [changedText, setChangedText] = useState("");
  const updateChangedText = useCallback(
    (e) => {
      setChangedText(e.target.value);
    },
    [setChangedText]
  );

  const diffs = useDiffs(originalText, changedText);

  return html`<${DetailsContainer}>
    <${Column}>
      <${ColumnTitle}>original text<//>
      <${CodeEditor} value=${originalText} onInput=${updateOriginalText} />
    <//>
    <${Column}>
      <${ColumnTitle}>changed text<//>
      <${CodeEditor} value=${changedText} onInput=${updateChangedText} />
    <//>
    <${Column}>
      <${ColumnTitle}>diff<//>
      <${DiffVieweer} diffs=${diffs} />
    <//>
  <//>`;
}
