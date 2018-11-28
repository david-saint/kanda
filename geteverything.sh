#!/bin/bash
cd ~/node/alpha/kanda/.git/lost-found/other 
FILES=*
COUNTER = 0
for f in $FILES
do
  echo "Processing $f file..."
  git show $f > "/Users/davidsaint/node/alpha/kanda/recovered/$COUNTER.m"
  let COUNTER=COUNTER+1 
done