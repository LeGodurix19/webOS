from django.shortcuts import render
from .models import Directory, Project
import simplejson as json

def index(request):
    directories = Directory.objects.all()
    projects = Project.objects.all()
    projects = [{
        'name': project.name,
        'type': project.project_type,
        'content': project.content,
        'slug': project.slug,
        'directory': project.directory.slug,
        'icon': project.icon
    } for project in projects]
    out_direcories = []
    for directory in directories:
        out_direcories.append({
            'icon': directory.icon,
            'name': directory.name,
            'id': directory.slug,
            'desc': directory.description,
            'projects': ([project for project in projects if project['directory'] == directory.slug]),
        })
    
    return render(request, 'app/index.html', context={'directories': out_direcories})