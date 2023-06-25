import { walk } from "https://deno.land/std@0.192.0/fs/walk.ts"
import { fetchOutTemplates } from "./fetch.ts";

async function displayResult() {
  for await (const entry of walk(".")) {
    console.log(entry.path)
  }
}

if (import.meta.main) {
  await fetchOutTemplates()
  await displayResult()
}
