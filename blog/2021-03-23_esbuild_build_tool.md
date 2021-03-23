---
pagetitle: The best build system so far
author: Christoph Müller
keywords: [build system, bundler, javascript, webpack, esbuild]
---

I have to admit that I was very skeptical when I first heard of *esbuild*. The claims just sounded overblown. Sure the performance is great, but what about the feature set? If it does non of the things that *webpack* does of course it would be faster.

But I was wrong. The feature gap for most common use cases was closed quickly. Watching for file system changes for instance has been implemented for quite a while now. Features like tree shaking, different loaders, jsx/tsx support and source maps are integrated. The only real feature that I am missing is incremental type checking (since type checking is out of scope for this project it will probably not be added), but this is mostly handled by my IDE (or a git pre-commit hook to prevent nonsense being commited to the git server).

*esbuild* will of course never replace webpack with all of its possibilities and countless plugins. But for most projects I don't need this flexibility. I would rather not have to worry about having a webpack plugin or yet another external dependency break after a few years. Furthermore while *esbuild* provides an API (accessible from both go and js) I use it exclusively via its cli tool. No more `webpack.config.js`. Now while this might not work for large organically grown projects, for most of my smaller projects it works flawlessly however. High performance and a decent and accessible feature set. Thank you *esbuild*!
