---
pagetitle: Building my Blog with GitHub Actions
author: Christoph Müller
keywords: [github, action, pandoc, deno, blog]
---

After moving my blog to a [simple static setup](./2020-12-23_new_blog_setup.html) I was missing the feature of editing and deploying the blog online.
Previously I could just log into [one.com](https://one.com) (my hoster) and edit everything online. But now I would have to run a bash script to generate the .html files and
push it to the server via rsync.
So I thought about moving the blogs source to github and using github actions to build the blog. Every site will also include a direct link to edit it using the GitHub file editor.

The problem of course being that pandoc + deno + fd is not really a common setup and there is no dedicated action available. 
But with the knowledge that every GitHub action that is based on ubuntu has a passwordless sudo access available it should not be to difficult to install the dependencies.

```yaml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the action will run. 
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-20.04

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - name: Install dependencies
        run: |
          sudo apt install pandoc
          sudo apt install fd-find
          curl -fsSL https://deno.land/x/install/install.sh | sh
      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: ./server-build.sh
      - name: rsync deployments
        uses: burnett01/rsync-deployments@4.1
        with:
          switches: -avzr --delete
          remote_path: /var/www/html/
          remote_host: devops.raytracer.me
          remote_user: root
          remote_key: ${{ secrets.DEPLOY_KEY }}
```

One can just run `sudo apt install` for the desired packages.
I had to create a different build script though since the `fd` command has a different name in ubuntu (`fdfind`) to prevent a naming clash and the `deno` executable would be needed to add to the path, but I instead just use the absolute path.
Finally the great rsync-deployment action moves the result to my server via (you guessed it) rsync. A dedicated machine is now no longer required (though of course still possible to use).
