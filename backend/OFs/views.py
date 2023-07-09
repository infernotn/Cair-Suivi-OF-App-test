
from django.shortcuts import render,get_object_or_404
from rest_framework.views import  APIView
from rest_framework.response import  Response
from OFs.models import *
from OFs.serializers import OFSerializer
from rest_framework import viewsets


# Create your views here.

class OFsViewSet(viewsets.ModelViewSet):
    queryset=OF.objects.all()
    serializer_class=OFSerializer
       
                        
# class OFsViewSet(APIView):
#     def get(self,request):
#         queryset=OF.objects.all()
#         serializer_class=OFSerializer
#         return Response(queryset)
                        

class OFView (APIView):
        def get(self,request, pk):
            queryset= get_object_or_404(OF,id=pk)
            serializer=OFSerializer(queryset)
            return Response(serializer.data)
        def put(self,request, pk):
            of= OF.objects.get(id=pk)
            # queryset=request.data
            serilizer  = OFSerializer(instance=of, data=request.data)
            
            print(serilizer.is_valid() , serilizer)
            if serilizer.is_valid():
                serilizer.save()
            print(serilizer.errors)
            return Response(serilizer.data)

# def UploadPlanning(request):
#      file= PlanningFile.objects.all()

class PlanningAc_View (APIView):
        def get(self,request, pk):
            OFs= OF.objects.all().exclude(Statut="soldé").values()
            serializer=OFSerializer(OFs,many=True)
            return Response(serializer.data)
        # def put(self,request, pk):
            of= OF.objects.get(id=pk)
            # queryset=request.data
            serilizer  = OFSerializer(instance=of, data=request.data)
            
            print(serilizer.is_valid() , serilizer)
            if serilizer.is_valid():
                serilizer.save()
            print(serilizer.errors)
            return Response(serilizer.data)
