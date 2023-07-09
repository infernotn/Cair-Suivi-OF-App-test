
from .models import *
from rest_framework import  serializers

class OFSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OF
        fields = ["id","N_OF", 'N_LOT', 'Reference', 'Quantite', "Statut",
    "atelier", "Date_prévu","Semaine_prévu","DP", "DP_version" ,"Derogation"]
class MP_OFSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MP_OF
        fields = ['OF', 'N_LOT', 'Reference', 'Quantite', "Statut","Matricule",]

class FilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanningFile
        fields = ['id','file']

