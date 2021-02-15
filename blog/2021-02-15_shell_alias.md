---
pagetitle: My Shell Aliases
author: Christoph Müller
keywords: [fish, shell, alias, fzf, fd, projector]
---

My favorite shell is the [fish](https://fishshell.com/) shell. It does not need much configuration and works fairly well out of the box including color highlighting and smart completions and suggestions. Except for the mediocre vim mode I do not have much to complain about. There are just a couple of things that I do miss when working in the shell:

- jumping to one of my git projects (either for work or personal projects
- searching for a specific subdirectory that may be burried somewhere deep

For the first problem I use a rust tool called [`projector`](https://docs.rs/crate/projector/0.5.0)  in combination with the great [`fzf` ](https://github.com/junegunn/fzf). `projector` has a config file to specify all the root locations for possible git repositories (e.g. the intellij folder and a local repos folder etc.). The output is fed into `fzf` for an interactive search. I pass the `--layout=reverse` option to display the results below for a better overview. I call the alias `jump`:

```
alias jump "cd (projector list | fzf --layout=reverse --height=40%)"
```

That takes care of the first problem. The second problem can also be solved via `fzf`. Actually most shells already offer some kind of `fzf`-plugin with some keyboard shortcut to interactively search subdirectories. But I have found that those plugin usally do not play nice with my local (german) keyboard layout and make quite a few assumptions I don't share. Instead I usually just use my own alias which calls the rust tool [`fd`](https://github.com/sharkdp/fd). `fd` ist great alternative to `find` with a much more intuitive UI and features like respecting the gitignore by default. 

```
alias deep "cd (fd -t d | fzf --layout=reverse --height=40%)"
```

I call the alias `deep`. `fd`  ist called with the `-t d` option as only directories should be searched.

