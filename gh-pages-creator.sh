#!/bin/bash

cd build

# ua
mkdir ua
cd ua

mkdir achivements
mkdir projects
mkdir skills

cd ..

# en
mkdir en
cd en

mkdir achivements
mkdir projects
mkdir skills

cd ..

# Copy index.html to 'ua' and 'en' folders
cp index.html ua/
cp index.html ua/achivements/
cp index.html ua/projects/
cp index.html ua/skills/

cp index.html en/
cp index.html en/achivements/
cp index.html en/projects/
cp index.html en/skills/

cd ..