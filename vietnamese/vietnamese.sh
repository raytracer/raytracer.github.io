#!/bin/bash

echo "---"
echo "pagetitle: Vietnamese Lessons"
echo "---"
fd --exclude 'index.md' -e md -x ./front.sh {} | sort -r
