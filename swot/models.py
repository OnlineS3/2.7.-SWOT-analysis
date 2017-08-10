from __future__ import unicode_literals

from django.conf import settings
from django.db import models

class Swotcard(models.Model):
	user_email = models.CharField(max_length=100)
	swotcard_name = models.CharField(max_length=100)

	class Meta:
		app_label = 'swot'

class Swotrow(models.Model):
	swotcard = models.ForeignKey(Swotcard, on_delete=models.CASCADE)
	quadrant = models.IntegerField()
	value = models.CharField(max_length=500)

	class Meta:
		app_label = 'swot'