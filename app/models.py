from django.db import models
from django.utils.text import slugify


class Directory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    slug = models.SlugField(max_length=255, unique=True, default='default-slug')
    icon = models.CharField(max_length=100, default='img/standard_folder_icon.svg')

    def __str__(self) -> str:
        return f'{self.name} ({self.description})'


class Project(models.Model):
    name = models.CharField(max_length=100)
    project_type = models.CharField(max_length=100)
    content = models.TextField()
    directory = models.ForeignKey(Directory, on_delete=models.CASCADE)
    slug = models.SlugField(max_length=255, unique=True, default='default-slug')
    icon = models.CharField(max_length=100, default='img/standard_file_icon.svg')

    def __str__(self) -> str:
        return f'{self.name} ({self.project_type})[{self.directory.name}]'