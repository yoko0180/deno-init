import { fetchTransform } from "https://raw.githubusercontent.com/yoko0180/deno-fetch-transform/master/fetchTransform.ts"
import { ensureDir } from "https://deno.land/std@0.192.0/fs/ensure_dir.ts"

type Context = Record<string, unknown>

async function fetchOut(names: string[], context: Context) {
  const p = []
  for (const name of names) {
    p.push(fetchOutSingle(name, context))
  }
  return await Promise.all(p)
}

async function fetchOutSingle(outfilename: string, context: Context) {
  const outfile = await Deno.open(outfilename, { create: true, write: true })
  const urlRoot = "https://github.com/yoko0180/deno-init/raw/master/templates/"
  const url = urlRoot + outfilename
  const w = outfile.writable
  await fetchTransform(url, w, context)
  w.close()
}

export async function fetchOutTemplates() {
  const context = {} // deno-initでは当てはめ要素なし
  await ensureDir(".vscode")
  const names = [
    ".vscode/settings.json",
    "deno.jsonc",
    "main_bench.ts",
    "main_test.ts",
    "main.ts",
  ]
  await fetchOut(names, context)
}
