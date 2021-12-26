from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.generic import TemplateView
from .models import Post

# Create your views here.
def home(request):
    return render(request, 'index.html')


def post_json(request):
    data = list(Post.objects.values())
    return JsonResponse(data, safe=False)
