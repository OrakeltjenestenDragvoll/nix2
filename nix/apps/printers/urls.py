from django.conf.urls import patterns, url
from . import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^update/', views.update, name='update'),
    url(r'^printmon/', views.printmon, name='printmon'),
    url(r'^printskjerm/', views.printskjerm, name='printskjerm'),
    url(r'^logs/', views.logs, name='logs'),
)