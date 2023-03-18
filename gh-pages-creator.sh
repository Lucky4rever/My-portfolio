#!/bin/bash

# Перейти до папки build
cd build

# Створити три папки
mkdir achivements
mkdir projects
mkdir skills

# Скопіювати файл X в кожну з папок
cp index.html achivements/
cp index.html projects/
cp index.html skills/

# Повернутись назад 
cd ..