# Obsidian Svgbob Plugin
This is a simple (not considering devices or other variables) plugin to render [Svgbob](https://github.com/ivanceras/svgbob) diagrams in code blocks for Obsidian.md.

[Svgbob editor](https://ivanceras.github.io/svgbob-editor/) is a great visual introduction to what it can be used for.

## How to use
Use a markdown code block with `bob` or `svgbob` to render. 

````markdown
```bob

       .---.
      /-o-/--
   .-/ / /->
  ( *  \/
   '-.  \
      \ /
       '
```
````

## Build
```sh
npm i
npm run build
```