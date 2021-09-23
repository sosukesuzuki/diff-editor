import { useMemo } from "preact-hooks";
import * as Diff from "diff";

export function useDiffs(originalText, changedText) {
  return useMemo(() => {
    return Diff.diffLines(originalText, changedText, { newlineIsToken: true });
  }, [originalText, changedText]);
}
