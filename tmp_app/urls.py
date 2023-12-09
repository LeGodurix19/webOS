from django.contrib import admin
from django.urls import path
from app.views import general_view
from dotenv import load_dotenv
import os

load_dotenv()
app_name = os.getenv('PROJECT_NAME')

urlpatterns = [
    path('', general_view.as_view(), name='view'),
]
