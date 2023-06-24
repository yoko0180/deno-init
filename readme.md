# deno init with vscode

deno-init command is generate vscode setting file for deno additional to deno init.

.vscode/settings.json
```
{
  "deno.enable": true,
  "deno.unstable": true
}
```

## install
```
deno install --allow-write --allow-read --allow-net -n deno-init https://github.com/yoko0180/deno-init/raw/master/main.ts
```

## usage
```
deno-init 
```