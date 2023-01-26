from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
    template=loader.get_template('index.html')
    template=loader.get_template('signin.html')
    return HttpResponse(template.render())
    return HttpResponse("Hello world!")
