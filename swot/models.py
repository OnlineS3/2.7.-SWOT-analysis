from __future__ import unicode_literals

from django.conf import settings
from django.db import models

class Swotcard(models.Model):
	user_email = models.CharField(max_length=100)
	swotcard_name = models.CharField(max_length=100)
	swot_type = models.CharField(max_length=10)
	share_id = models.CharField(max_length=40)
	share_permissions = models.IntegerField()
	#0 = private
	#1 = viewable
	#2 = editable

	class Meta:
		app_label = 'swot'

class Swotrow(models.Model):
	swotcard = models.ForeignKey(Swotcard, on_delete=models.CASCADE)
	quadrant = models.IntegerField()
	value = models.CharField(max_length=500)

	class Meta:
		app_label = 'swot'

class Shares(models.Model):
	swotcard = models.ForeignKey(Swotcard, on_delete=models.CASCADE)
	shared_with = models.CharField(max_length=100)

	class Meta:
		app_label = 'swot'