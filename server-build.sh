#!/bin/sh
cd blog
/home/runner/.deno/bin/deno run --unstable --allow-read --allow-write  blog.ts
cd ..
fdfind -e md -x pandoc -s {} --template template.html -c /mvp.css --metadata=github:"https://github.com/raytracer/website/edit/main/{}" -o {.}.html
