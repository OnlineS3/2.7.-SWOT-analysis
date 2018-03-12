function str_opp_layout()
{
	document.getElementById("weaknesses_div").style.display = "none";
	document.getElementById("threats_div").style.display = "none";

	document.getElementById("section-description").innerHTML = "How can you use these Strengths to take advantage of these Opportunities?";

	var list = document.getElementsByClassName("add_value");
	for(i = 0; i < list.length; i++){
		list[i].style.display = "none";
	}

	document.getElementById("str_opp_button").className = "div-button-active";

	document.getElementById("opportunities_div").style.clear = "none";

	document.getElementById("opportunities_div").style.marginBottom = "5px";

	document.getElementById("str_opp_div").style.display = "inline";
}

function str_thr_layout()
{
	document.getElementById("weaknesses_div").style.display = "none";
	document.getElementById("opportunities_div").style.display = "none";

	document.getElementById("section-description").innerHTML = "How can you use these Strengths to reduce the impact of these Threats?";

	var list = document.getElementsByClassName("add_value");
	for(i = 0; i < list.length; i++){
		list[i].style.display = "none";
	}

	document.getElementById("str_thr_button").className = "div-button-active";

	document.getElementById("threats_div").style.marginBottom = "5px";

	document.getElementById("str_thr_div").style.display = "inline";
}

function wea_opp_layout()
{
	document.getElementById("strengths_div").style.display = "none";
	document.getElementById("threats_div").style.display = "none";

	document.getElementById("section-description").innerHTML = "How can you overcome these Weaknesses that stop you from taking advantage of these Opportunities?";

	var list = document.getElementsByClassName("add_value");
	for(i = 0; i < list.length; i++){
		list[i].style.display = "none";
	}

	document.getElementById("wea_opp_button").className = "div-button-active";

	document.getElementById("opportunities_div").style.clear = "none";

	document.getElementById("opportunities_div").style.marginBottom = "5px";

	document.getElementById("wea_opp_div").style.display = "inline";
}

function wea_thr_layout()
{
	document.getElementById("strengths_div").style.display = "none";
	document.getElementById("opportunities_div").style.display = "none";

	document.getElementById("section-description").innerHTML = "How can you address the Weaknesses that will enable these Threats?";

	var list = document.getElementsByClassName("add_value");
	for(i = 0; i < list.length; i++){
		list[i].style.display = "none";
	}

	document.getElementById("wea_thr_button").className = "div-button-active";

	document.getElementById("threats_div").style.marginBottom = "5px";

	document.getElementById("wea_thr_div").style.display = "inline";
}

function swot_layout(){
	document.getElementById("swot_button").className = "div-button-active";
	document.getElementById("section-title").innerHTML = "SWOT Analysis";
}

function reset_layout()
{
	document.getElementById("strengths_div").style.display = "inline";
	document.getElementById("opportunities_div").style.display = "inline";
	document.getElementById("weaknesses_div").style.display = "inline";
	document.getElementById("threats_div").style.display = "inline";

	var list = document.getElementsByClassName("add_value");
	for(i = 0; i < list.length; i++){
		list[i].style.display = "inline";
	}

	document.getElementById("opportunities_div").style.clear = "left";

	document.getElementById("opportunities_div").style.marginBottom = "40px";
	document.getElementById("threats_div").style.marginBottom = "40px";

	var list2 = document.getElementsByClassName("div-button-active");
	for(i = list2.length-1; i >= 0; i--){
		list2[i].className = "div-button-inactive";
	}

	document.getElementById("str_opp_div").style.display = "none";
	document.getElementById("str_thr_div").style.display = "none";
	document.getElementById("wea_opp_div").style.display = "none";
	document.getElementById("wea_thr_div").style.display = "none";
}

function setSwotType(type)
{
	if(type == "simple")
	{
		document.getElementById("swot_button").style.display = "none";
		document.getElementById("str_opp_button").style.display = "none";
		document.getElementById("str_thr_button").style.display = "none";
		document.getElementById("wea_opp_button").style.display = "none";
		document.getElementById("wea_thr_button").style.display = "none";

		document.getElementById("swotcard_name").setAttribute("swot_type", "simple");
	}
	else if(type == "advanced")
	{
		document.getElementById("swot_button").style.display = "block";
		document.getElementById("str_opp_button").style.display = "block";
		document.getElementById("str_thr_button").style.display = "block";
		document.getElementById("wea_opp_button").style.display = "block";
		document.getElementById("wea_thr_button").style.display = "block";

		document.getElementById("swotcard_name").setAttribute("swot_type", "advanced");
	}
}