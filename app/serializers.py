from .models import InitModel
from rest_framework import serializers


class InitSerializer(serializers.ModelSerializer):
	class Meta:
		model = InitModel
		fields = ('id', 'name','text')
