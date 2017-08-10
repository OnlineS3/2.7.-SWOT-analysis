from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^pdf/$', views.export_to_pdf, name='swot_pdf'),
	url(r'^getswotcards/$', views.get_swotcard_for_user, name='swot_getswotcards'),
	url(r'^loginview/$', views.login_view, name='swot_loginview'),
	url(r'^logoutview/$', views.logout, name='swot_logoutview'),
	url(r'^saveswot/$', views.saveswot, name='swot_savetodb'),
	url(r'^loadswot/$', views.loadswot, name='swot_loadfromdb'),
	url(r'^about/$', views.about, name='swot_about'),
	url(r'^guide/$', views.guide, name='swot_guide'),
	url(r'^related/$', views.related, name='swot_related'),
	url(r'^$', views.index, name='swot_index'),
	url(r'^callback$', views.callback, name='swot_callback'),
]