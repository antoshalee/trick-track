# __TrickTrack__


digital audio workstation online


### Installation
```
pip[3] install -r requirments.txt
```
example of configuration file:

```
SECRET_KEY=<your secret key here>
DEBUG=True
DB_NAME=DB
DB_USER=<your name>
DB_PASSWORD=<your password>
DB_HOST=localhost
DB_PORT=<5432 would be awesome :)>
```
[DJANGO SECRET KEY GENERATOR](https://djecrety.ir)

running PostgreSQL server required
```
python manage.py migrate

python manage.py runserver
```

http://127.0.0.1:8000/

