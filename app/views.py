import logging
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.views import View

class general_view(View):
    def get(self, request):
        return render(request, 'tmp_app/general.html')
