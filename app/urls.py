from django.contrib import admin
from django.urls import path
from app.views import index 
from dotenv import load_dotenv
import os

load_dotenv()
app_name = os.getenv('PROJECT_NAME')

urlpatterns = [
    path('', index, name='view'),
    path('admin/', admin.site.urls),
]
