var strengths = [];
var weakness = [];
var opportunities = [];
var threats = [];
var str_opp = [];
var str_thr = [];
var wea_opp = [];
var wea_thr = [];

/*
This function adds a new value to the specified list (strength,weakness,opportunities, threat) and creates the html for it
*/
function addToList(value_type)
{
	switch(value_type)
	{
		case "strength":
			if(document.getElementById("strength_input").value != null && document.getElementById("strength_input").value != "")
			{
				strengths.push(document.getElementById("strength_input").value);
				document.getElementById("strength_ul").innerHTML = document.getElementById("strength_ul").innerHTML.concat("<li><span>" + document.getElementById("strength_input").value + "</span> <i onclick=\"removeFromList('strength', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				document.getElementById("strength_input").value = "";
			}
			break;
		case "weakness":
			if(document.getElementById("weakness_input").value != null && document.getElementById("weakness_input").value != "")
			{
				weakness.push(document.getElementById("weakness_input").value);
				document.getElementById("weakness_ul").innerHTML = document.getElementById("weakness_ul").innerHTML.concat("<li><span>" + document.getElementById("weakness_input").value + "</span> <i onclick=\"removeFromList('weakness', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				document.getElementById("weakness_input").value = "";
			}
			break;
		case "opportunities":
			if(document.getElementById("opportunities_input").value != null && document.getElementById("opportunities_input").value != "")
			{
				opportunities.push(document.getElementById("opportunities_input").value);
				document.getElementById("opportunities_ul").innerHTML = document.getElementById("opportunities_ul").innerHTML.concat("<li><span>" + document.getElementById("opportunities_input").value + "</span> <i onclick=\"removeFromList('opportunities', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				document.getElementById("opportunities_input").value = "";
			}
			break;
		case "threat":
			if(document.getElementById("threat_input").value != null && document.getElementById("threat_input").value != "")
			{
				threats.push(document.getElementById("threat_input").value);
				document.getElementById("threat_ul").innerHTML = document.getElementById("threat_ul").innerHTML.concat("<li><span>" + document.getElementById("threat_input").value + "</span> <i onclick=\"removeFromList('threat', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				document.getElementById("threat_input").value = "";
			}
			break;
		case "str_opp":
			if(document.getElementById("str_opp_input").value != null && document.getElementById("str_opp_input").value != "")
			{
				str_opp.push(document.getElementById("str_opp_input").value);
				document.getElementById("str_opp_ul").innerHTML = document.getElementById("str_opp_ul").innerHTML.concat("<li><span>" + document.getElementById("str_opp_input").value + "</span> <i onclick=\"removeFromList('str_opp', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				document.getElementById("str_opp_input").value = "";
			}
			break;
		case "str_thr":
			if(document.getElementById("str_thr_input").value != null && document.getElementById("str_thr_input").value != "")
			{
				str_thr.push(document.getElementById("str_thr_input").value);
				document.getElementById("str_thr_ul").innerHTML = document.getElementById("str_thr_ul").innerHTML.concat("<li><span>" + document.getElementById("str_thr_input").value + "</span> <i onclick=\"removeFromList('str_thr', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				document.getElementById("str_thr_input").value = "";
			}
			break;
		case "wea_opp":
			if(document.getElementById("wea_opp_input").value != null && document.getElementById("wea_opp_input").value != "")
			{
				wea_opp.push(document.getElementById("wea_opp_input").value);
				document.getElementById("wea_opp_ul").innerHTML = document.getElementById("wea_opp_ul").innerHTML.concat("<li><span>" + document.getElementById("wea_opp_input").value + "</span> <i onclick=\"removeFromList('wea_opp', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				document.getElementById("wea_opp_input").value = "";
			}
			break;
		case "wea_thr":
			if(document.getElementById("wea_thr_input").value != null && document.getElementById("wea_thr_input").value != "")
			{
				wea_thr.push(document.getElementById("wea_thr_input").value);
				document.getElementById("wea_thr_ul").innerHTML = document.getElementById("wea_thr_ul").innerHTML.concat("<li><span>" + document.getElementById("wea_thr_input").value + "</span> <i onclick=\"removeFromList('wea_thr', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				document.getElementById("wea_thr_input").value = "";
			}
			break;
	}
}

/*
This function removes a specified value from a specified list and then modifies the html to reflect the change.
*/
function removeFromList(value_type, element)
{
	var li_element = element.parentNode;
	var span_element = element.previousElementSibling;
	console.log("removing");
	switch(value_type)
	{
		case "strength":
			if(strengths.length > 0)
			{
				var index = strengths.indexOf(span_element.innerHTML);
				strengths.splice(index, 1);
				document.getElementById("strength_ul").innerHTML = "";

				for(i = 0; i < strengths.length; i++)
				{
					document.getElementById("strength_ul").innerHTML = document.getElementById("strength_ul").innerHTML.concat("<li><span>" + strengths[i] + "</span> <i onclick=\"removeFromList('strength', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
		case "weakness":
			if(weakness.length > 0)
			{
				var index = weakness.indexOf(span_element.innerHTML);
				weakness.splice(index, 1);
				document.getElementById("weakness_ul").innerHTML = "";

				for(i = 0; i < weakness.length; i++)
				{
					document.getElementById("weakness_ul").innerHTML = document.getElementById("weakness_ul").innerHTML.concat("<li><span>" + weakness[i] + "</span> <i onclick=\"removeFromList('weakness', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
		case "opportunities":
			if(opportunities.length > 0)
			{
				var index = opportunities.indexOf(span_element.innerHTML);
				opportunities.splice(index, 1);
				document.getElementById("opportunities_ul").innerHTML = "";

				for(i = 0; i < opportunities.length; i++)
				{
					document.getElementById("opportunities_ul").innerHTML = document.getElementById("opportunities_ul").innerHTML.concat("<li><span>" + opportunities[i] + "</span> <i onclick=\"removeFromList('opportunities', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
		case "threat":
			if(threats.length > 0)
			{
				var index = threats.indexOf(span_element.innerHTML);
				threats.splice(index, 1);
				document.getElementById("threat_ul").innerHTML = "";

				for(i = 0; i < threats.length; i++)
				{
					document.getElementById("threat_ul").innerHTML = document.getElementById("threat_ul").innerHTML.concat("<li><span>" + threats[i] + "</span> <i onclick=\"removeFromList('threat', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
		case "str_opp":
			console.log("in str opp");
			if(str_opp.length > 0)
			{
				var index = str_opp.indexOf(span_element.innerHTML);
				str_opp.splice(index, 1);
				document.getElementById("str_opp_ul").innerHTML = "";

				for(i = 0; i < str_opp.length; i++)
				{
					document.getElementById("str_opp_ul").innerHTML = document.getElementById("str_opp_ul").innerHTML.concat("<li><span>" + str_opp[i] + "</span> <i onclick=\"removeFromList('str_opp', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
		case "str_thr":
			if(str_thr.length > 0)
			{
				var index = str_thr.indexOf(span_element.innerHTML);
				str_thr.splice(index, 1);
				document.getElementById("str_thr_ul").innerHTML = "";

				for(i = 0; i < str_thr.length; i++)
				{
					document.getElementById("str_thr_ul").innerHTML = document.getElementById("str_thr_ul").innerHTML.concat("<li><span>" + str_thr[i] + "</span> <i onclick=\"removeFromList('str_thr', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
		case "wea_opp":
			if(wea_opp.length > 0)
			{
				var index = wea_opp.indexOf(span_element.innerHTML);
				wea_opp.splice(index, 1);
				document.getElementById("wea_opp_ul").innerHTML = "";

				for(i = 0; i < wea_opp.length; i++)
				{
					document.getElementById("wea_opp_ul").innerHTML = document.getElementById("wea_opp_ul").innerHTML.concat("<li><span>" + wea_opp[i] + "</span> <i onclick=\"removeFromList('wea_opp', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
		case "wea_thr":
			if(wea_thr.length > 0)
			{
				var index = wea_thr.indexOf(span_element.innerHTML);
				wea_thr.splice(index, 1);
				document.getElementById("wea_thr_ul").innerHTML = "";

				for(i = 0; i < wea_thr.length; i++)
				{
					document.getElementById("wea_thr_ul").innerHTML = document.getElementById("wea_thr_ul").innerHTML.concat("<li><span>" + wea_thr[i] + "</span> <i onclick=\"removeFromList('wea_thr', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
	}
}

/*
creates a seperate window with a more print friendly layout.
*/
function printPDF()
{
	document.getElementById("strengths_div").style.display = "inline";
	document.getElementById("opportunities_div").style.display = "inline";
	document.getElementById("weaknesses_div").style.display = "inline";
	document.getElementById("threats_div").style.display = "inline";
	document.getElementById("str_opp_div").style.display = "inline";
	document.getElementById("str_thr_div").style.display = "inline";
	document.getElementById("wea_opp_div").style.display = "inline";
	document.getElementById("wea_thr_div").style.display = "inline";

	var divContents = document.getElementById("swot_div").outerHTML;

	var printWindow = "";
	printWindow += '<html><head><title>DIV Contents</title>';
	printWindow += '</head><body >';
	printWindow += '<h1>'+ document.getElementById('swotcard_name').innerHTML +'</h1>';
	printWindow += divContents;
	printWindow += '</body></html>';
	console.log(printWindow);

	var list2 = document.getElementsByClassName("div-button-active");
	if(list2[0].id == "swot_button")
	{
		reset_layout();
		swot_layout();
	}
	else if(list2[0].id == "str_opp_button")
	{
		reset_layout();
		str_opp_layout();
	}
	else if(list2[0].id == "str_thr_button")
	{
		reset_layout();
		str_thr_layout();
	}
	else if(list2[0].id == "wea_opp_button")
	{
		reset_layout();
		wea_opp_layout();
	}
	else if(list2[0].id == "wea_thr_button")
	{
		reset_layout();
		wea_thr_layout();
	}

	document.getElementById("html_string").value = printWindow;

	return printWindow;
}

function leavingPage()
{
	return confirm("Leaving this page will discard any changes you have made. Are you sure you would like to leave without saving?");
}

function generateJSON()
{
	swotcard_name = document.getElementById("swotcard_name").innerHTML;
	swotcard_name_json = '"swotcard_name":"' + swotcard_name + '",';

	observations_json = '"observations":{';

	strength_json = '"strengths":[';
	for(i = 0; i < strengths.length; i++)
	{
		strength_json += '"' + strengths[i] + '",';
	}
	strength_json[strength_json.length-1] == ","?strength_json = strength_json.substring(0, strength_json.length - 1):false;
	strength_json += '],';
	observations_json += strength_json;

	weaknesses_json = '"weaknesses":[';
	for(i = 0; i < weakness.length; i++)
	{
		weaknesses_json += '"' + weakness[i] + '",';
	}
	weaknesses_json[weaknesses_json.length-1] == ","?weaknesses_json = weaknesses_json.substring(0, weaknesses_json.length - 1):false;
	weaknesses_json += '],';
	observations_json += weaknesses_json;

	opportunities_json = '"opportunities":[';
	for(i = 0; i < opportunities.length; i++)
	{
		opportunities_json += '"' + opportunities[i] + '",';
	}
	opportunities_json[opportunities_json.length-1] == ","?opportunities_json = opportunities_json.substring(0, opportunities_json.length - 1):false;
	opportunities_json += '],';
	observations_json += opportunities_json;

	threats_json = '"threats":[';
	for(i = 0; i < threats.length; i++)
	{
		threats_json += '"' + threats[i] + '",';
	}
	threats_json[threats_json.length-1] == ","?threats_json = threats_json.substring(0, threats_json.length - 1):false;
	threats_json += ']';
	observations_json += threats_json;

	observations_json += '},';

	analysis_json = '"analysis":{';

	str_opp_json = '"str_opp":[';
	for(i = 0; i < str_opp.length; i++)
	{
		str_opp_json += '"' + str_opp[i] + '",';
	}
	str_opp_json[str_opp_json.length-1] == ","?str_opp_json = str_opp_json.substring(0, str_opp_json.length - 1):false;
	str_opp_json += '],';
	analysis_json += str_opp_json;

	str_thr_json = '"str_thr":[';
	for(i = 0; i < str_thr.length; i++)
	{
		str_thr_json += '"' + str_thr[i] + '",';
	}
	str_thr_json[str_thr_json.length-1] == ","?str_thr_json = str_thr_json.substring(0, str_thr_json.length - 1):false;
	str_thr_json += '],';
	analysis_json += str_thr_json;

	wea_opp_json = '"wea_opp":[';
	for(i = 0; i < wea_opp.length; i++)
	{
		wea_opp_json += '"' + wea_opp[i] + '",';
	}
	wea_opp_json[wea_opp_json.length-1] == ","?wea_opp_json = wea_opp_json.substring(0, wea_opp_json.length - 1):false;
	wea_opp_json += '],';
	analysis_json += wea_opp_json;

	wea_thr_json = '"wea_thr":[';
	for(i = 0; i < wea_thr.length; i++)
	{
		wea_thr_json += '"' + wea_thr[i] + '",';
	}
	wea_thr_json[wea_thr_json.length-1] == ","?wea_thr_json = wea_thr_json.substring(0, wea_thr_json.length - 1):false;
	wea_thr_json += ']';
	analysis_json += wea_thr_json;

	analysis_json += '}';

	json = '{' + swotcard_name_json + observations_json + analysis_json +  '}';
	return json;
}

function saveToDB()
{
	$.ajaxSetup({ 
	     beforeSend: function(xhr, settings) {
	         function getCookie(name) {
	             var cookieValue = null;
	             if (document.cookie && document.cookie != '') {
	                 var cookies = document.cookie.split(';');
	                 for (var i = 0; i < cookies.length; i++) {
	                     var cookie = jQuery.trim(cookies[i]);
	                     // Does this cookie string begin with the name we want?
	                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                         break;
	                     }
	                 }
	             }
	             return cookieValue;
	         }
	         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
	             // Only send the token to relative URLs i.e. locally.
	             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
	         }
	     } 
	});
	$.ajax({url: document.getElementById("savebutton").getAttribute("action"),
			type: "POST",
			data: {
				text_json: generateJSON()
			},
			success: function(result){
				console.log("success: " + result);
				alert("Scorecard succesfully saved.")
			},
			error: function(xhr, status, error){
				console.log("xhr: " + xhr.responseText);
				console.log("status: " + status);
				console.log("error: " + error);
			}
	});
}

function loadFromDB()
{
	select = document.getElementById("swotcard_select");
	selected_option = select.options[select.selectedIndex].value;
	$.ajaxSetup({ 
	     beforeSend: function(xhr, settings) {
	         function getCookie(name) {
	             var cookieValue = null;
	             if (document.cookie && document.cookie != '') {
	                 var cookies = document.cookie.split(';');
	                 for (var i = 0; i < cookies.length; i++) {
	                     var cookie = jQuery.trim(cookies[i]);
	                     // Does this cookie string begin with the name we want?
	                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                         break;
	                     }
	                 }
	             }
	             return cookieValue;
	         }
	         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
	             // Only send the token to relative URLs i.e. locally.
	             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
	         }
	     } 
	});

	$.ajax({url: document.getElementById("loadbutton").getAttribute("action"),
			type: "POST",
			data: {
				swotcard_name: selected_option
			},
			success: function(result){
				loadJson(result);
				console.log("success: " + result);
				hideModal("swotcard_load_modal");
			},
			error: function(xhr, status, error){
				console.log("xhr: " + xhr.responseText);
				console.log("status: " + status);
				console.log("error: " + error);
			}
	});
}

function loadJson(text_json)
{
	var obj = JSON.parse(text_json);

	document.getElementById("swotcard_name").innerHTML = obj.swotcard_name;
	document.getElementById("swotcard_edit").value = obj.swotcard_name;

	console.log(Object.keys(obj));
	var strengths_obj = obj.observations.strengths;
	var weaknesses_obj = obj.observations.weaknesses;
	var opportunities_obj = obj.observations.opportunities;
	var threats_obj = obj.observations.threats;
	var str_opp_obj = obj.analysis.str_opp;
	var str_thr_obj = obj.analysis.str_thr;
	var wea_opp_obj = obj.analysis.wea_opp;
	var wea_thr_obj = obj.analysis.wea_thr;

	strengths = [], weakness = [], opportunities = [], threats = [];
	str_opp = [], str_thr = [], wea_opp = [], wea_thr = [];
	if(text_json != null && text_json != "")
	{
		for(i = 0; i < strengths_obj.length; i++)
		{
			strengths.push(strengths_obj[i]);
		}
		for(i = 0; i < weaknesses_obj.length; i++)
		{
			weakness.push(weaknesses_obj[i]);
		}
		for(i = 0; i < opportunities_obj.length; i++)
		{
			opportunities.push(opportunities_obj[i]);
		}
		for(i = 0; i < threats_obj.length; i++)
		{
			threats.push(threats_obj[i]);
		}

		for(i = 0; i < str_opp_obj.length; i++)
		{
			str_opp.push(str_opp_obj[i]);
		}
		for(i = 0; i < str_thr_obj.length; i++)
		{
			str_thr.push(str_thr_obj[i]);
		}
		for(i = 0; i < wea_opp_obj.length; i++)
		{
			wea_opp.push(wea_opp_obj[i]);
		}
		for(i = 0; i < wea_thr_obj.length; i++)
		{
			wea_thr.push(wea_thr_obj[i]);
		}
	}

	document.getElementById("strength_ul").innerHTML = "";
	document.getElementById("weakness_ul").innerHTML = "";
	document.getElementById("opportunities_ul").innerHTML = "";
	document.getElementById("threat_ul").innerHTML = "";
	document.getElementById("str_opp_ul").innerHTML = "";
	document.getElementById("str_thr_ul").innerHTML = "";
	document.getElementById("wea_opp_ul").innerHTML = "";
	document.getElementById("wea_thr_ul").innerHTML = "";

	for(i = 0; i < strengths.length; i++)
	{
		document.getElementById("strength_ul").innerHTML = document.getElementById("strength_ul").innerHTML.concat("<li><span>" + strengths[i] + "</span> <i onclick=\"removeFromList('strength', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
	}
	for(i = 0; i < weakness.length; i++)
	{
		document.getElementById("weakness_ul").innerHTML = document.getElementById("weakness_ul").innerHTML.concat("<li><span>" + weakness[i] + "</span> <i onclick=\"removeFromList('weakness', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
	}
	for(i = 0; i < opportunities.length; i++)
	{
		document.getElementById("opportunities_ul").innerHTML = document.getElementById("opportunities_ul").innerHTML.concat("<li><span>" + opportunities[i] + "</span> <i onclick=\"removeFromList('opportunities', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>")
	}
	for(i = 0; i < threats.length; i++)
	{
		document.getElementById("threat_ul").innerHTML = document.getElementById("threat_ul").innerHTML.concat("<li><span>" + threats[i] + "</span> <i onclick=\"removeFromList('threat', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
	}

	for(i = 0; i < str_opp.length; i++)
	{
		document.getElementById("str_opp_ul").innerHTML = document.getElementById("str_opp_ul").innerHTML.concat("<li><span>" + str_opp[i] + "</span> <i onclick=\"removeFromList('str_opp', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
	}
	for(i = 0; i < str_thr.length; i++)
	{
		document.getElementById("str_thr_ul").innerHTML = document.getElementById("str_thr_ul").innerHTML.concat("<li><span>" + str_thr[i] + "</span> <i onclick=\"removeFromList('str_thr', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
	}
	for(i = 0; i < wea_opp.length; i++)
	{
		document.getElementById("wea_opp_ul").innerHTML = document.getElementById("wea_opp_ul").innerHTML.concat("<li><span>" + wea_opp[i] + "</span> <i onclick=\"removeFromList('wea_opp', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>")
	}
	for(i = 0; i < wea_thr.length; i++)
	{
		document.getElementById("wea_thr_ul").innerHTML = document.getElementById("wea_thr_ul").innerHTML.concat("<li><span>" + wea_thr[i] + "</span> <i onclick=\"removeFromList('wea_thr', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
	}
	
	return true;
}

function showSwotcardNameEdit()
{
	document.getElementById("swotcard_name_div").style.display = "none";
	document.getElementById("swotcard_edit_div").style.display = "block";
}

function hideSwotcardNameEdit()
{
	document.getElementById("swotcard_name_div").style.display = "block";
	document.getElementById("swotcard_edit_div").style.display = "none";
	document.getElementById("swotcard_name").innerHTML = document.getElementById("swotcard_edit").value;
}

function getSwotcards()
{
	$.ajaxSetup({ 
	     beforeSend: function(xhr, settings) {
	         function getCookie(name) {
	             var cookieValue = null;
	             if (document.cookie && document.cookie != '') {
	                 var cookies = document.cookie.split(';');
	                 for (var i = 0; i < cookies.length; i++) {
	                     var cookie = jQuery.trim(cookies[i]);
	                     // Does this cookie string begin with the name we want?
	                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                         break;
	                     }
	                 }
	             }
	             return cookieValue;
	         }
	         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
	             // Only send the token to relative URLs i.e. locally.
	             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
	         }
	     } 
	});

	$.ajax({url: document.getElementById("getswotcards").getAttribute("action"),
			type: "GET",
			success: function(result){
				console.log("success: " + result);
				populateModalSelect(result);
			},
			error: function(xhr, status, error){
				console.log("xhr: " + xhr.responseText);
				console.log("status: " + status);
				console.log("error: " + error);
			}
	});
}

function populateModalSelect(input)
{
	var modal_select = document.getElementById("swotcard_select");

	for(i = modal_select.childNodes.length-1; i >= 0 ; i--)
	{
		modal_select.removeChild(modal_select.childNodes[i]);
	}

	var obj = JSON.parse(input);
	var cards = obj.swotcards;
	for(i = 0; i < cards.length; i++)
	{
		option = document.createElement("option");
		option.value = cards[i].swotcard_name;
		option.innerHTML = cards[i].swotcard_name;
		modal_select.appendChild(option);
	}
	document.getElementById("swotcard_load_modal").style.display = "block";
}

function displayModal(modalId)
{
	console.log("modalId: " + modalId);
	document.getElementById(modalId).style.display = "block";
}

function hideModal(modalId)
{
	document.getElementById(modalId).style.display = "none";
}

function exportPdf()
{
	$.ajaxSetup({ 
	     beforeSend: function(xhr, settings) {
	         function getCookie(name) {
	             var cookieValue = null;
	             if (document.cookie && document.cookie != '') {
	                 var cookies = document.cookie.split(';');
	                 for (var i = 0; i < cookies.length; i++) {
	                     var cookie = jQuery.trim(cookies[i]);
	                     // Does this cookie string begin with the name we want?
	                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                         break;
	                     }
	                 }
	             }
	             return cookieValue;
	         }
	         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
	             // Only send the token to relative URLs i.e. locally.
	             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
	         }
	     } 
	});

	$.ajax({url: document.getElementById("exportpdf").getAttribute("action"),
			type: "POST",
			data: {
				html_string: printPDF()
			},
			success: function(result){
				console.log("success: " + result);
			},
			error: function(xhr, status, error){
				console.log("xhr: " + xhr.responseText);
				console.log("status: " + status);
				console.log("error: " + error);
			}
	});
}

$(document).ready(function() {
  var auth = new auth0.WebAuth({
    domain: 'onlines3.eu.auth0.com',
    clientID: 'UI4IXwkCYlZjmVqmdTMSI5yRzIEWV9l6'
   });


    $('.login-btn').click(function(e) {
      e.preventDefault();
      auth.authorize({
        audience: 'https://' + 'onlines3.eu.auth0.com' + '/userinfo',
        scope: 'openid profile',
        responseType: 'code',
        redirectUri: 'http://li1088-54.members.linode.com:8082/swot/callback'
      });
    });
});

/*
This creates an input element of type 'file' and clicks it.
The effect is a file selction pop-up.
*/
function createAndClickFile()
{
	var test = document.createElement("input");
	test.type = "file";
	test.id = "createdfilebutton"
	//test.style.display = "none";
	test.onchange = loadFileAsText;
	document.body.appendChild(test);
	test.click();
}

/*
This method loads a text file from disk and adds its contents to the lists on the page.
*/
function loadFileAsText()
{
	console.log("Loading JSON File");
	var fileToLoad = document.getElementById("createdfilebutton").files[0];
	document.body.removeChild(document.getElementById("createdfilebutton"));

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent)
	{
		var input = fileLoadedEvent.target.result;
		loadJson(input);
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
	//document.body.removeChild(test);
}

function setSaveForm()
{
	document.getElementById("tablejson_save").value = generateJSON();
	document.getElementById("download_data_form").submit();
}