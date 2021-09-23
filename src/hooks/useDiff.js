import { useEffect, useState } from "preact-hooks";
import workerize from "workerize";

const worker = workerize(
  `
  export async function lineDiffs(originalText, changedText) {
    const { diffLines } = await import("https://cdn.skypack.dev/diff@5.0.0");
    return diffLines(originalText, changedText, {
      newlineIsToken: true,
    });
  }
`
);

export function useDiffs(originalText, changedText) {
  const [diffs, setDiffs] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await worker.lineDiffs(originalText, changedText);
      setDiffs(result);
    })();
  }, [originalText, changedText]);
  return diffs;
}
