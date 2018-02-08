# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2018-02-06 15:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('swot', '0003_swotcard_share_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Shares',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shared_with', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='swotcard',
            name='swot_type',
            field=models.CharField(default='simple', max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='shares',
            name='swotcard',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='swot.Swotcard'),
        ),
    ]