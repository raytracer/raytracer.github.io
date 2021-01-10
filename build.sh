#!/bin/sh
cd blog
deno run --unstable --allow-read --allow-write  blog.ts
cd ..
fd -e md -x pandoc -s {} --template template.html -c /mvp.css -o {.}.html
