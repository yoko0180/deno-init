import { ensureDir } from "https://deno.land/std@0.192.0/fs/ensure_dir.ts"
import { fetchOut } from "./fetch.ts"

export async function fetchCli() {
  const context = {} // deno-initでは当てはめ要素なし
  await ensureDir(".vscode")
  await fetchOut({
    urlRoot: "https://github.com/yoko0180/deno-init/raw/master/templates/base/",
    // prettier-ignore
    names: [
      ".vscode/settings.json",
      "deno.jsonc",
      "main_bench.ts",
      "main_test.ts",
    ],
    context,
  })
  await fetchOut({
    urlRoot: "https://github.com/yoko0180/deno-init/raw/master/templates/cli/",
    // prettier-ignore
    names: [
      "main.ts",
    ],
    context,
  })
}
