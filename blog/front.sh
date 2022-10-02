#!/bin/bash

RESULT=$(sed -n '1,/---/p'  $1 | sed '1d;$d')

DATE=${1::10}
FILE="${1%%.*}.html"

while IFS= read -r line; do
  if [ $(cut -d: -f1 <<< $line) = "pagetitle" ]; then
    NAME=$(cut -d: -f2 <<< $line)
    TRIMMED=$(xargs <<< $NAME)
    echo "*" "**\`$DATE\`**" "[$TRIMMED]($FILE)"
    exit
  fi
done <<< "$RESULT"

NAME=$(cut -c 12- <<< "${1%%.*}" | sed 's/_/ /g' | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) substr($i,2) }}1')
echo "*" "**\`$DATE\`**" "[$NAME]($FILE)"
