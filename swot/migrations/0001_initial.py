# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-06-28 14:07
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Swotcard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_email', models.CharField(max_length=100)),
                ('swotcard_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Swotrow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quadrant', models.IntegerField()),
                ('value', models.CharField(max_length=500)),
                ('swotcard', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='swot.Swotcard')),
            ],
        ),
    ]
