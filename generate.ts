import { walkSync } from "https://deno.land/std@0.82.0/fs/mod.ts";
import { relative } from "https://deno.land/std@0.82.0/path/mod.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
//import * as hljs from "https://unpkg.com/@highlightjs/cdn-assets@10.5.0/highlight.min.js";
import hljs from "https://dev.jspm.io/highlightjs";
import { template } from "./template.ts";

const suffix = ".md";

const highlight = (hljs as any).highlight;
Marked.setOptions({ highlight: (code, lang) => highlight(lang, code).value });

console.log(highlight("java", "public static class Foobar {}"));

for (const entry of walkSync(".")) {
    if (entry.isFile && entry.name.endsWith(suffix)) {
        const parsed = Marked.parse(Deno.readTextFileSync(entry.path));
        const html = template(parsed.content, parsed.meta, `https://github.com/raytracer/website/edit/master/${relative(Deno.cwd(), entry.path)}`);
        //console.log(html);
        //Deno.writeTextFile(entry.path.replace(suffix, ".html"), html);
    }
}
