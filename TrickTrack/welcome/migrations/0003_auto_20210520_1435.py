# Generated by Django 3.2.3 on 2021-05-20 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('welcome', '0002_auto_20210518_1612'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': 'Юзер', 'verbose_name_plural': 'Юзеры'},
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=36, verbose_name='username'),
        ),
    ]
