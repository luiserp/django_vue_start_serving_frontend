### How to make a django app executable and serving a VUE-Vite App

This proyect is for reference, it's a non terminated project configured to start a server capable of send data in JSON format to the frontend and also serving the frontend like statics files.

#### Requirements 

* Python v3.10

#### How to start
1. python -m venv venv
2. `.\venv\Scripts\activete` on windows o `source ./venv/bin/activate` on linux
3. pip install -r requirements.txt
4. python manage.py makemigrations
5. python manage.py migrate
6. python manage.py runserver

It's posible to start the server throughout the start.bat, it's a fast way.

#### Configs

All the main configs are maded in settings and urls on the config folder.