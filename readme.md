
# WebOS

![](https://img.shields.io/badge/Langage-Python-green.svg) ![](https://img.shields.io/badge/Framework-Django-grey.svg) ![](https://img.shields.io/badge/Project_type-Personnal-red.svg)

This site copies the look and feel of a macOS desktop. It lets 
you open and close windows, manage their size, reduce them, etc.
Folders and files are stored in db.

It was developed with the aim of discovering advanced DOM manipulation in JS, as well as building my first personal django server!

## Deployment

To deploy the project, you need to install docker.

```bash
git clone ...
```

Once the repo is on your computer, use the .env_example file to create the .env file.

```bash
docker-compose build && docker-compose up -d
```

Once this has been done, you can connect to the [site](http://127.0.0.1:8000/)!

The desktop is empty?  No problem, go to the [database](http://127.0.0.1:8000/admin/) to add more!

PS: Here's a quick tutorial: to add a project, first create a folder. The "Desktop" folder will contain the files displayed directly on the desktop.


## Author

- [@Goudurix](https://www.github.com/goudurix)