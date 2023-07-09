
from django.urls import path, include,re_path
from rest_framework import routers
from OFs.views import OFView,OFsViewSet
from . import views


router = routers.DefaultRouter()
router.register(r'', OFsViewSet)
# router.register('of/<str:pk>/', OFView),
# (?P<id>[a-z,0-9]+)
urlpatterns = [
 
    path(r'', include(router.urls)),
  
path('of/<str:pk>/', views.OFView.as_view() ),
path('Planning/<int:pk>/', views.PlanningAc_View.as_view() ),
# path('planning/upload', views.UploadPlanning),
] 