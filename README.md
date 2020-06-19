
## ❓ What is this?

This is a sample repo demostrating svelte typescript issue where it can't load-up custom types added via "typings" folder for *.svelte (script tags with lang="ts or typescirpt"), but with the same tsconfig, *.ts files can loadup the new types with the typescript plugin of vscode

 install [Official VS Code Plugin (beta)](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) in vscode

 ```sh
git clone --dept=1 https://github.com/Dulanjala007/sapper-typescript-graphql-template;

cd sapper-typescript-graphql-template && npm install
```

* Restart the vscode

* Goto src/client.ts and hover over 'stores' and 'page' varibales, you should see types loaded...

* Goto src/routes/index.svelte, and hover over 'stores' and 'page' varibales, you should see types aren't loading...

if you have any idea, please help me fix this.. thanks in advance...!