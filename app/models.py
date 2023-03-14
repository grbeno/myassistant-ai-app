from django.db import models


class InitModel(models.Model):
    name = models.CharField(max_length=50)
    text = models.CharField(max_length=300)

    def __str__(self) -> str:
        return self.name

