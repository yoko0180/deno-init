import { fetchTransform } from "https://raw.githubusercontent.com/yoko0180/deno-fetch-transform/master/fetchTransform.ts"

type Context = Record<string, unknown>
type FetchOutSingle = {
  urlRoot: string
  outfilename: string
  context: Context
}
type FetchOut = {
  names: string[]
  urlRoot: string
  context: Context
}

async function fetchOutSingle({ urlRoot, outfilename, context }: FetchOutSingle) {
  const outfile = await Deno.open(outfilename, { create: true, write: true })
  const url = urlRoot + outfilename
  const w = outfile.writable
  await fetchTransform(url, w, context)
  w.close()
}

export async function fetchOut({ names, urlRoot, context }: FetchOut) {
  const p = []
  for (const outfilename of names) {
    p.push(fetchOutSingle({ urlRoot, outfilename, context }))
  }
  return await Promise.all(p)
}
