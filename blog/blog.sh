#!/bin/bash

echo "---"
echo "pagetile: Blog Entries"
echo "---"
fd --exclude 'index.md' -e md -x ./front.sh {} | sort -r
