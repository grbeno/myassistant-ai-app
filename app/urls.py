from django.urls import path
from .views import *


urlpatterns = [
    path('', React.as_view(), name='frontend'),
	path('app/', InitView.as_view()),
]
