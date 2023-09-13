---
pagetitle: My new Blog Setup
author: Christoph Müller
keywords: [pandoc, deno, blog]
---

![100% guilty -- [source](https://rakhim.org/honestly-undefined/19/)](https://rakhim.org/images/honestly-undefined/blogging.jpg)

My old blog setup consisted of a set of 2-3 handwritten php pages including a backend script for handling contact form requests by forwarding them to a telegram bot. Since this was heavily abused by spam I decided to drop the contact form altogether and replace the site with a set of statically rendered html that get generated from markdown documents.

## Generating HTML-Documents

For generating the html documents [pandoc]() was used. Pandoc is a great and versatile tool. Of course you can supply your own custom .css file and base html-template e.g.:

```bash
pandoc -s index.md --template template.html -c /mvp.css -o index.html
```

This will generate an index.html from an index.md file and use the mvp.css stylesheet (the / is used to make it usable from all html files by being accessible from the root directory)  and template.html base template. You can write the default template to disk by passing the `-D` option to pandoc:

```bash
pandoc -D html > template.html
```

The mvp.css css is basically a mix from the original [mvp.css](https://andybrewer.github.io/mvp/) combined with a few color accents from the [nord color theme](https://www.nordtheme.com/). 

## Generating all .html-files at once

To generate all .html-files at once I use a tool called [`fd`](https://github.com/sharkdp/fd) which is a modern rust interpretation of the classic `find`. I prefer it mostly for its much more refined UI/UX. `fd` can execute a command for every file matching the filter criteria.

```bash
fd -e md -x pandoc -s {} --template template.html -c /mvp.css -o {.}.html
```

This will recursively transform my markdown documents into html documents. My blog is just a subdirectory with a list of markdown files prefixed with an iso date string.

## Generating an overview

An index.md file containing all blog entries is automatically generated from the list of files in the /blog directory (including sorting the prefixed files). For generating the list I used the [deno](https://deno.land/) platform which is (grossly simplified) a typescript like version of node. Dependency management is completely different though in that the import call in your .ts files will contain fully qualified urls (including the desired version). Dependencies are usally cached for offline use. Now for this simple site a simple bash script would be fine as well, but the convenience of using an actual scripting language including great static typing support was nice.