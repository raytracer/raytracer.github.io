#!/bin/sh
cd blog
./blog.sh > index.md
cd ..
cd vietnamese
./vietnamese.sh > index.md
cd ..
fd -e md --exclude README.md -x pandoc -s {} --template template.html -c /mvp.css --metadata=github:"https://github.com/raytracer/website/edit/main/{}" -o {.}.html
