var strengths = [];
var weakness = [];
var opportunities = [];
var threats = [];

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
	}
}

/*
This function removes a specified value from a specified list and then modifies the html to reflect the change.
*/
function removeFromList(value_type, element)
{
	console.log("removing");
	switch(value_type)
	{
		case "strength":
			if(strengths.length > 0)
			{
				var li_element = element.parentNode;
				var span_element = element.previousElementSibling;
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
				var li_element = element.parentNode;
				var span_element = element.previousElementSibling;
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
				var li_element = element.parentNode;
				var span_element = element.previousElementSibling;
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
				var li_element = element.parentNode;
				var span_element = element.previousElementSibling;
				var index = threats.indexOf(span_element.innerHTML);
				threats.splice(index, 1);
				document.getElementById("threat_ul").innerHTML = "";

				for(i = 0; i < threats.length; i++)
				{
					document.getElementById("threat_ul").innerHTML = document.getElementById("threat_ul").innerHTML.concat("<li><span>" + threats[i] + "</span> <i onclick=\"removeFromList('threat', this)\" class=\"fa fa-times-circle remove-button\" aria-hidden=\"true\"></i></li>");
				}
			}
			break;
	}
}

/*
creates a text file of the current data and saves it to disk
*/
function saveTextAsFile()
{
	var output = "";
	output = output.concat("strengths: ").concat(strengths.toString()).concat("\n");
	output = output.concat("weakness: ").concat(weakness.toString()).concat("\n");
	output = output.concat("opportunities: ").concat(opportunities.toString()).concat("\n");
	output = output.concat("threats: ").concat(threats.toString());

	var textToSave = output;
	var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	var fileNameToSaveAs = "swot_analysis";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	downloadLink.href = textToSaveAsURL;
	downloadLink.onclick = destroyClickedElement;
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);

	downloadLink.click();
}

/*
destroys element that triggered the event
*/
function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

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
	console.log("loadFIleastext");
	var fileToLoad = document.getElementById("createdfilebutton").files[0];
	document.body.removeChild(document.getElementById("createdfilebutton"));

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var input = fileLoadedEvent.target.result;
		strengths = [], weakness = [], opportunities = [], threats = [];
		if(input != null && input != "")
		{
			var split = input.split("\n");

			var str = split[0].replace("strengths: ", "").split(",");
			var wea = split[1].replace("weakness: ", "").split(",");
			var opp = split[2].replace("opportunities: ", "").split(",");
			var thr = split[3].replace("threats: ", "").split(",");

			for(i = 0; i < str.length; i++)
			{
				strengths.push(str[i]);
			}
			for(i = 0; i < wea.length; i++)
			{
				weakness.push(wea[i]);
			}
			for(i = 0; i < opp.length; i++)
			{
				opportunities.push(opp[i]);
			}
			for(i = 0; i < thr.length; i++)
			{
				threats.push(thr[i]);
			}
		}
		console.log(strengths.length);
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
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
	//document.body.removeChild(test);
}

/*
creates a seperate window with a more print friendly layout.
*/
function printPDF()
{
	//printWithBullets();
	var divContents = document.getElementById("swot_div").outerHTML;
	//printWithoutBullets();
	var printWindow = window.open('', '', 'height=400,width=800');
	printWindow.document.write('<html><head><title>DIV Contents</title>');
	printWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');
	printWindow.document.write('<link rel="stylesheet" type="text/css" href="css/SWOT_v3_print.css">');
	printWindow.document.write('</head><body >');
	printWindow.document.write(divContents);
	printWindow.document.write('</body></html>');
	printWindow.document.close();
	
	//printWindow.print();
}

function leavingPage()
{
	return confirm("Leaving this page will discard any changes you have made. Are you sure you would like to leave without saving?");
}