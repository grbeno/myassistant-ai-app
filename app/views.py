from django.shortcuts import render
from rest_framework.views import APIView
from django.views.generic import TemplateView
from . models import *
from rest_framework.response import Response
from .serializers import *


class React(TemplateView):
	template_name = 'index.html'


class InitView(APIView):
	
	serializer_class = InitSerializer

	def get(self, request):
		detail = [ {"id": detail.id, "name": detail.name,"text": detail.text}
		for detail in InitModel.objects.all()]
		return Response(detail)

	def post(self, request):
		serializer = InitSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			return Response(serializer.data)


