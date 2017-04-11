var strengths = [];
var weakness = [];
var opportunities = [];
var threats = [];

function addValue(value_type)
{
	switch(value_type)
	{
		case "strength":
			if(document.getElementById("strength_input").value != null && document.getElementById("strength_input").value != "")
			{
				strengths.push(document.getElementById("strength_input").value);
				document.getElementById("strength_input").value = "";
				document.getElementById("strength_list").innerHTML = strengths.toString().replace(/,/g,"<br>");
			}
			break;
		case "weakness":
			if(document.getElementById("weakness_input").value != null && document.getElementById("weakness_input").value != "")
			{
				weakness.push(document.getElementById("weakness_input").value);
				document.getElementById("weakness_input").value = "";
				document.getElementById("weakness_list").innerHTML = weakness.toString().replace(/,/g,"<br>");
			}
			break;
		case "opportunities":
			if(document.getElementById("opportunities_input").value != null && document.getElementById("opportunities_input").value != "")
			{
				opportunities.push(document.getElementById("opportunities_input").value);
				document.getElementById("opportunities_input").value = "";
				document.getElementById("opportunities_list").innerHTML = opportunities.toString().replace(/,/g,"<br>");
			}
			break;
		case "threat":
			if(document.getElementById("threat_input").value != null && document.getElementById("threat_input").value != "")
			{
				threats.push(document.getElementById("threat_input").value);
				document.getElementById("threat_input").value = "";
				document.getElementById("threat_list").innerHTML = threats.toString().replace(/,/g,"<br>");
			}
			break;
	}
	
}

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

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

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

function loadFileAsText()
{
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
		document.getElementById("strength_list").innerHTML = strengths.toString().replace(/,/g,"<br>");
		document.getElementById("weakness_list").innerHTML = weakness.toString().replace(/,/g,"<br>");
		document.getElementById("opportunities_list").innerHTML = opportunities.toString().replace(/,/g,"<br>");
		document.getElementById("threat_list").innerHTML = threats.toString().replace(/,/g,"<br>");
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
	//document.body.removeChild(test);
}

function printWithBullets()
{
	var str = "";
	for(i = 0; i < strengths.length; i++)
	{
		str += "<li>"+strengths[i]+"</li>";
	}
	var wea = "";
	for(i = 0; i < weakness.length; i++)
	{
		wea += "<li>"+weakness[i]+"</li>";
	}
	var opp = "";
	for(i = 0; i < opportunities.length; i++)
	{
		opp += "<li>"+opportunities[i]+"</li>";
	}
	var thr = "";
	for(i = 0; i < threats.length; i++)
	{
		thr += "<li>"+threats[i]+"</li>";
	}
	document.getElementById("strength_list").innerHTML = "<ul>" + str + "</ul>";
	document.getElementById("weakness_list").innerHTML = wea;
	document.getElementById("opportunities_list").innerHTML = opp;
	document.getElementById("threat_list").innerHTML = thr;
}

function printWithoutBullets()
{
	document.getElementById("strength_list").innerHTML = strengths.toString().replace(/,/g,"<br>");
	document.getElementById("weakness_list").innerHTML = weakness.toString().replace(/,/g,"<br>");
	document.getElementById("opportunities_list").innerHTML = opportunities.toString().replace(/,/g,"<br>");
	document.getElementById("threat_list").innerHTML = threats.toString().replace(/,/g,"<br>");
}

function printPDF()
{
	printWithBullets();
	var divContents = document.getElementById("swot_div").outerHTML;
	printWithoutBullets();
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