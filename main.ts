import { fromFileUrl, dirname, join } from "https://deno.land/std@0.78.0/path/mod.ts"
import { copy } from "https://deno.land/std@0.192.0/fs/mod.ts"
import { walk } from "https://deno.land/std@0.192.0/fs/walk.ts"

const currentDir = dirname(fromFileUrl(import.meta.url))

async function displayResultCommand() {
  const command = new Deno.Command("fd", {
    args: ["-H"],
    stdout: "inherit",
  })
  // const { code, stdout, stderr } = await command.output();
  await command.output()
}

async function displayResult() {
  for await (const entry of walk(".")) {
    console.log(entry.path)
  }
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const src = join(currentDir, "templates")
  const dst = "."
  await copy(src, dst, { overwrite: true })

  await displayResult()
}
