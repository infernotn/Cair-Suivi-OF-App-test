from django.db import models
from datetime import date
 


# Create your models here.
class OF(models.Model):
    id = models.BigAutoField(primary_key=True)
    N_OF=models.TextField(max_length=20)
    N_LOT=models.TextField(max_length=20)
    Reference=models.TextField(max_length=10)
    Quantite=models.IntegerField(default=0)
    Statut=models.TextField(max_length=50,default="à lancer")
    DP=models.TextField(max_length=10,null=True)
    DP_version=models.IntegerField(null=True)
    Derogation=models.TextField(max_length=500 ,default="aucune derogation")
    Date_prévu=models.DateField(null=False,default=date.today())
    Semaine_prévu=models.IntegerField(default=0,null=False)
    atelier=models.TextField(default="à determiner")
    def __str__(self):
        return self.N_OF


class MP_OF(models.Model):
    OF=models.ForeignKey(OF,on_delete=models.CASCADE)
    Reference=models.TextField(max_length=10)
    N_LOT=models.TextField(max_length=20)
    Quantite=models.IntegerField(default=0)
    Matricule=models.IntegerField(default=0)
    Statut=models.TextField(max_length=50,default="à prèparer")
    def __str__(self) :
        return self.Reference


class PlanningFile(models.Model):
    file=models.FileField(upload_to="planning_files/")
    def __str__(self):
        return self.pdf