#!/bin/bash

echo "---"
echo "pagetitle: Blog Entries"
echo "---"
fd --exclude 'index.md' -e md -x ./front.sh {/} | sort -r
