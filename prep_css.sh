#!/bin/bash
for file in css/scheme/*.css
do
    echo $file
    name=$(basename $file .css)
    # echo $name

    (echo "/*COLOR-SCHEME*/"; cat $file; echo "/*STYLES*/"; cat css/main-theme.css) > temp.css

    mkdir -p build
    #Converts stuff like css-vars into hardcoded values
    postcss --use postcss-cssnext --use postcss-fixes temp.css -o build/style-$name.css
    cssnano build/style-$name.css build/style-$name.css
    echo ">>> build/style-$name.css"
    rm -f temp.css

    #makes the website readable on IE8:
    postcss --use oldie build/style-$name.css -o build/style-$name.oldie.css
    echo ">>> build/style-$name.oldie.css"


done
