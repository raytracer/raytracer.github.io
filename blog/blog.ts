import { walkSync } from "https://deno.land/std@0.82.0/fs/mod.ts";
import { relative } from "https://deno.land/std@0.82.0/path/mod.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

const entries = [];

const suffix = ".md";

for (const entry of walkSync(".")) {
    if (entry.name !== "index.md" && entry.isFile && entry.name.endsWith(suffix)) {
        const pagetitle = Marked.parse(Deno.readTextFileSync(entry.path)).meta.pagetitle || entry.name.substr(11).replace(suffix, "").replace("_", " ");
        const date = entry.name.substr(0, 10);
        entries.push(`* **`${date}`** [${pagetitle}](${relative(Deno.cwd(), entry.path).replace(suffix, ".html")})`);
    }
}

entries.sort().reverse();

Deno.writeTextFile("index.md", ["---", "pagetitle: Blog Entries", "---", ...entries].join("\n"));
