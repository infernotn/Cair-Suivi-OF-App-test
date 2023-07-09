
from django.contrib import admin
from django.urls import path,include
from OFs.views import *
urlpatterns = [

    path('', include('OFs.urls'),name="OFs"),

    path("admin/", admin.site.urls),
]
