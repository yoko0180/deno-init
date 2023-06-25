import { ensureDir } from "https://deno.land/std@0.192.0/fs/ensure_dir.ts"
import { fetchOut } from "./fetch.ts";

export async function fetchMini() {
  const context = {} // miniでは当てはめ要素なし
  await ensureDir(".vscode")
  const urlRoot = "https://github.com/yoko0180/deno-init/raw/master/templates/base/"
  const names = [
    ".vscode/settings.json",
    "deno.jsonc",
    "main_bench.ts",
    "main_test.ts",
    "main.ts",
  ]
  await fetchOut({
    urlRoot,
    names,
    context
  })
}
