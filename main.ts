import { walk } from "https://deno.land/std@0.192.0/fs/walk.ts"
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts"
import { Select } from "https://deno.land/x/cliffy@v0.25.7/prompt/select.ts"
import { fetchMini } from "./fetch/mini.ts"
import { fetchCli } from "./fetch/cli.ts"

async function displayResult() {
  for await (const entry of walk(".")) {
    console.log(entry.path)
  }
}

type CreateType = "mini" | "cli"

if (import.meta.main) {
  await new Command()
    .name("deno-init")
    .version("0.1.0")
    .description(" deno-init command is generate vscode setting file for deno additional to deno init.  ")
    .action(async (ops, ...args) => {
      const createType: string = await Select.prompt({
        message: "Create a Type",
        options: [
          "mini", "cli"
        ],
      })
      
      if (createType === "mini") { await fetchMini() }
      if (createType === "cli") { await fetchCli() }
      await displayResult()
    })
    .parse(Deno.args)
}
