$(document).ready(function() {
	$("#calculate").click(function() {
		$("#content").slideToggle(500, function() {
			var mpg = document.getElementById("mpg").value;
			var distance = document.getElementById("distance").value;
			
			$("#content").children().remove();
			
			var gasGallons = distance / mpg;
			var co2Efficiency = 3.14; //3.14 kg CO2/kg CH2
			var gasWeightCoefficient = 2.70; //1000kg for every 370gal
	
			var result = gasGallons * co2Efficiency * gasWeightCoefficient;
			
			var addHtml = "<div class=\"center\"><p> Your CO2 rating is: </p>"
			
			if((result >= 3673) && (result <= 4473)){
				addHtml += "<p id=\"co2avg\">AVERAGE</p></div>";
			}
			else if(result < 3673){
				addHtml += "<p id=\"co2great\">GREAT</p></div>";
			}
			else {
				addHtml += "<p id=\"co2bad\">TERRIBLE</p></div>";
			}
			
			addHtml += "<div id = \"info\"> Your CO2 rating is <span style=\"color:blue;\">" + result.toLocaleString() + " kg/year</span>, compared to the average of <span style=\"color:blue;\">4,074 kg/year</span>.<br>Try using the following resources under the \"Resources\" tab at the top to further reduce your usage.";
			
			$("#content").html(addHtml);
			
		});
		$("#content").slideToggle(500);
	});
});