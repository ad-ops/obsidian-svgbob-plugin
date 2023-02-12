import { Plugin } from "obsidian";
import bob from "bob-wasm";

function renderSvgbob(source: string, el: HTMLElement) {
	// Makes it easier to view
	el.style.backgroundColor = "white";
	
	const svg = bob.render(source);
	// Svgbob uses global styles which affects other Obsidian areas.
	// Add id and only set for decendants
	const id = "bob";
	const descendant = `svg#${id}`;
	el.innerHTML = svg
		.replace('<svg', '<svg id="bob"')
		.replace('line', `${descendant} line`)
		.replace('path', `${descendant} path`)
		.replace('circle', `${descendant} circle`)
		.replace('rect', `${descendant} rect`)
		.replace('polygon', `${descendant} polygon`);
}

export default class SvgbobPlugin extends Plugin {
	async onload() {
		await bob.loadWASM();
		this.registerMarkdownCodeBlockProcessor("bob", renderSvgbob);
		this.registerMarkdownCodeBlockProcessor("svgbob", renderSvgbob);
	}
}