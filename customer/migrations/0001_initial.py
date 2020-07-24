# Generated by Django 2.2.12 on 2020-07-19 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appid', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=50)),
                ('province', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('district', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=50)),
                ('manager', models.CharField(max_length=50)),
                ('mobile', models.CharField(max_length=50)),
                ('customer_lv', models.IntegerField(default=3)),
                ('t_code', models.CharField(max_length=50)),
                ('is_delete', models.IntegerField(default=0)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('last_update_time', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]