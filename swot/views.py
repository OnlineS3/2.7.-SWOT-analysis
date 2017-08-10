from django.shortcuts import render,redirect
import json
import pdfkit
from django.http import HttpResponse, FileResponse
from auth0.v3.authentication import GetToken
from auth0.v3.authentication import Users

#from weasyprint import HTML, CSS

from .models import Swotrow,Swotcard

client_id = "UI4IXwkCYlZjmVqmdTMSI5yRzIEWV9l6"
client_secret = "UYOXjkj4aEW17VJKpOVK4d_zlbCotc2buElEX1MnTiMjYiW6I_1uzFccK_iYEPzZ"

def index(request):
	return render(request, 'swot/index.html')

def about(request):
	return render(request, 'swot/about.html')

def guide(request):
	return render(request, 'swot/guide.html')

def related(request):
	return render(request, 'swot/related_documents.html')

def login_view(request):
	request.session['swot_profile'] = json.loads('{"email": "' + request.POST['username'] + '"}')
	return redirect('swot_index')

def saveswot(request):
	text_json = request.POST['text_json']
	parsed_json = json.loads(text_json)

	swotcard_name = parsed_json["swotcard_name"]
	if Swotcard.objects.filter(swotcard_name=swotcard_name).count() == 0:
		swotcard_instance = Swotcard.objects.create(user_email=request.session['swot_profile']['email'], swotcard_name=swotcard_name)
		swotcard_instance.save()
	
	swotcard = Swotcard.objects.filter(swotcard_name=swotcard_name).first()

	#table index:
	#0 = strengths
	#1 = weaknesses
	#2 = opportunities
	#3 = threats
	#4 = str_opp
	#5 = str_thr
	#6 = wea_opp
	#7 = wea_thr

	existing_rows = Swotrow.objects.filter(swotcard=swotcard)

	for i in existing_rows:
		if(not any(i.value == j for j in parsed_json["observations"]["strengths"]) and 
			    not any(i.value == j for j in parsed_json["observations"]["weaknesses"]) and
			    not any(i.value == j for j in parsed_json["observations"]["opportunities"]) and
			    not any(i.value == j for j in parsed_json["observations"]["threats"]) and
			    not any(i.value == j for j in parsed_json["analysis"]["str_opp"]) and
			    not any(i.value == j for j in parsed_json["analysis"]["str_thr"]) and
			    not any(i.value == j for j in parsed_json["analysis"]["wea_opp"]) and
			    not any(i.value == j for j in parsed_json["analysis"]["wea_thr"])):
			i.delete()

	for row in parsed_json["observations"]["strengths"]:
		if not any(i.value == row for i in existing_rows):
			swotrow_instance = Swotrow.objects.create(swotcard=swotcard, quadrant=0, value=row)
			swotrow_instance.save()

	for row in parsed_json["observations"]["weaknesses"]:
		if not any(i.value == row for i in existing_rows):
			swotrow_instance = Swotrow.objects.create(swotcard=swotcard, quadrant=1, value=row)
			swotrow_instance.save()

	for row in parsed_json["observations"]["opportunities"]:
		if not any(i.value == row for i in existing_rows):
			swotrow_instance = Swotrow.objects.create(swotcard=swotcard, quadrant=2, value=row)
			swotrow_instance.save()

	for row in parsed_json["observations"]["threats"]:
		if not any(i.value == row for i in existing_rows):
			swotrow_instance = Swotrow.objects.create(swotcard=swotcard, quadrant=3, value=row)
			swotrow_instance.save()

	for row in parsed_json["analysis"]["str_opp"]:
		if not any(i.value == row for i in existing_rows):
			swotrow_instance = Swotrow.objects.create(swotcard=swotcard, quadrant=4, value=row)
			swotrow_instance.save()

	for row in parsed_json["analysis"]["str_thr"]:
		if not any(i.value == row for i in existing_rows):
			swotrow_instance = Swotrow.objects.create(swotcard=swotcard, quadrant=5, value=row)
			swotrow_instance.save()

	for row in parsed_json["analysis"]["wea_opp"]:
		if not any(i.value == row for i in existing_rows):
			swotrow_instance = Swotrow.objects.create(swotcard=swotcard, quadrant=6, value=row)
			swotrow_instance.save()

	for row in parsed_json["analysis"]["wea_thr"]:
		if not any(i.value == row for i in existing_rows):
			swotrow_instance = Swotrow.objects.create(swotcard=swotcard, quadrant=7, value=row)
			swotrow_instance.save()
	#return redirect('index')
	return HttpResponse(text_json)

def loadswot(request):
	swotcard_name = request.POST["swotcard_name"]
	swotcard = Swotcard.objects.filter(swotcard_name=swotcard_name).first()

	strengths = Swotrow.objects.filter(swotcard=swotcard, quadrant=0)
	weaknesses = Swotrow.objects.filter(swotcard=swotcard, quadrant=1)
	opportunities = Swotrow.objects.filter(swotcard=swotcard, quadrant=2)
	threats = Swotrow.objects.filter(swotcard=swotcard, quadrant=3)
	str_opp = Swotrow.objects.filter(swotcard=swotcard, quadrant=4)
	str_thr = Swotrow.objects.filter(swotcard=swotcard, quadrant=5)
	wea_opp = Swotrow.objects.filter(swotcard=swotcard, quadrant=6)
	wea_thr = Swotrow.objects.filter(swotcard=swotcard, quadrant=7)

	strengths_json = '"strengths":['
	for i in strengths:
		strengths_json += '"' + i.value + '",'
	if strengths_json.endswith(","):
		strengths_json = strengths_json[:len(strengths_json)-1]
	strengths_json += '],'

	weaknesses_json = '"weaknesses":['
	for i in weaknesses:
		weaknesses_json += '"' + i.value + '",'
	if weaknesses_json.endswith(","):
		weaknesses_json = weaknesses_json[:len(weaknesses_json)-1]
	weaknesses_json += '],'

	opportunities_json = '"opportunities":['
	for i in opportunities:
		opportunities_json += '"' + i.value + '",'
	if opportunities_json.endswith(","):
		opportunities_json = opportunities_json[:len(opportunities_json)-1]
	opportunities_json += '],'

	threats_json = '"threats":['
	for i in threats:
		threats_json += '"' + i.value + '",'
	if threats_json.endswith(","):
		threats_json = threats_json[:len(threats_json)-1]
	threats_json += ']'

	str_opp_json = '"str_opp":['
	for i in str_opp:
		str_opp_json += '"' + i.value + '",'
	if str_opp_json.endswith(","):
		str_opp_json = str_opp_json[:len(str_opp_json)-1]
	str_opp_json += '],'

	str_thr_json = '"str_thr":['
	for i in str_thr:
		str_thr_json += '"' + i.value + '",'
	if str_thr_json.endswith(","):
		str_thr_json = str_thr_json[:len(str_thr_json)-1]
	str_thr_json += '],'

	wea_opp_json = '"wea_opp":['
	for i in wea_opp:
		wea_opp_json += '"' + i.value + '",'
	if wea_opp_json.endswith(","):
		wea_opp_json = wea_opp_json[:len(wea_opp_json)-1]
	wea_opp_json += '],'

	wea_thr_json = '"wea_thr":['
	for i in wea_thr:
		wea_thr_json += '"' + i.value + '",'
	if wea_thr_json.endswith(","):
		wea_thr_json = wea_thr_json[:len(wea_thr_json)-1]
	wea_thr_json += ']'

	observations = '"observations":{' + strengths_json + weaknesses_json + opportunities_json + threats_json + '}'
	analysis = '"analysis": {' + str_opp_json + str_thr_json + wea_opp_json + wea_thr_json  + '}'
	text_json = '{"swotcard_name":"' + swotcard_name +'", ' + observations +', ' + analysis +' }'

	return HttpResponse(text_json)

def get_swotcard_for_user(request):
	user = request.session['swot_profile']['email']
	swotcards = Swotcard.objects.filter(user_email=user)
	swotcards_json = '{"swotcards":['

	for sc in swotcards:
		swotcards_json += '{"swotcard_name": "'+ sc.swotcard_name +'"},'

	if swotcards_json.endswith(","):
		swotcards_json = swotcards_json[:len(swotcards_json)-1]

	swotcards_json += ']}'
	return HttpResponse(swotcards_json)

def export_to_pdf(request):
	#if on linux:
	pdf = HTML(string=request.POST['html_string']).write_pdf(stylesheets=[CSS(filename="/home/django/balancedscorecard/swot/static/css/SWOT_print.css"), CSS(filename="/home/django/balancedscorecard/swot/static/css/layout.css")])

	#if on windows:

	#html_string = request.POST['html_string']
	#config = pdfkit.configuration(wkhtmltopdf='C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe')
	#css = [
	#	'/home/django/balancedscorecard/swot/static/css/SWOT_print.css',
	#	'/home/django/balancedscorecard/swot/static/css/layout.css',
	#]
	#pdf = pdfkit.from_string(html_string, False, css=css)
	#pdfkit.from_file('C:\\Users\\Joel Potts\\Documents\\Online S3\\WP4\\SWOT\\SWOT v4\\related_documents.html', 'out.pdf', configuration=config, css=css)

	response = FileResponse(pdf, content_type='application/pdf')
	response['Content-Disposition'] = 'attachment; filename=swot_analysis.pdf'
	return response
	#return FileResponse(pdf, content_type='application/pdf')
	
def callback(request):
	code = request.GET['code']
	get_token = GetToken('onlines3.eu.auth0.com')
	auth0_users = Users('onlines3.eu.auth0.com')
	token = get_token.authorization_code(client_id, client_secret, code, 'http://li1088-54.members.linode.com:8082/swot/callback/')
	user_info = auth0_users.userinfo(token['access_token'])
	request.session['swot_profile'] = json.loads(user_info)
	#save user to db and session
	return redirect('swot_index')

def logout(request):
	request.session['swot_profile'] = None
	#parsed_base_url = urlparse('http://li1088-54.members.linode.com:8082/bscapp/callback/')
	#base_url = parsed_base_url.scheme + '://' + parsed_base_url.netloc
	#return redirect('https://%s/v2/logout?returnTo=%s&client_id=%s' % ('onlines3.eu.auth0.com', base_url, 'vE0hJ4Gx1uYG9LBtuxgqY7CTIFmKivFH'))
	return redirect('swot_index')
