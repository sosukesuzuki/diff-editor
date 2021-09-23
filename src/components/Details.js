import { html } from "../html.js";
import { useState, useCallback } from "preact-hooks";
import { styled } from "goober";
import { CodeEditor } from "./CodeEditor.js";
import { DiffVieweer } from "./DiffViewer.js";
import { useDiffs } from "../hooks/useDiff.js";

const DetailsContainer = styled("div")`
  display: flex;
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
    <${CodeEditor} value=${originalText} onInput=${updateOriginalText} />
    <${CodeEditor} value=${changedText} onInput=${updateChangedText} />
    <${DiffVieweer} diffs=${diffs} />
  <//>`;
}
