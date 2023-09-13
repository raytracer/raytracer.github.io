import { plugin } from "bun";
import { renderToStaticMarkup } from "react-dom/server";
import { glob } from "glob";
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'


// Their esbuild plugin runs in Bun (without esbuild)
import mdx from "@mdx-js/esbuild";
import MainTemplate from "./MainTemplate";
plugin(mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter], useDynamicImport: true }));

const files = await glob("**/*.mdx", { ignore: 'node_modules/**', dotRelative: true });

for (let page of files) {
  const { default: Page, frontmatter } = await import(page);
  const html = renderToStaticMarkup(<MainTemplate path={page} pagetitle={frontmatter?.pagetitle}><Page components={{
    img: props => <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.alt}</figcaption>
    </figure>
  }} /></MainTemplate>);

  Bun.write(page.replace(".mdx", ".html").replace(".md", ".html"), html);
}

