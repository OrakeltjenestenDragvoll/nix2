
$(document).ready(function() {
	var chart;
	var colors = Highcharts.getOptions().colors,
		//categories = ['MSIE', 'Firefox'],
		name = 'Browser brands',
		data = [];

	// Build the data arrays
	var browserData = [];
	var versionsData = [];
				
	var options = {
		chart: {
			renderTo: 'container',
			type: 'pie'
		},
		title: {
			text: 'Saker per dager'
		},
		yAxis: {
			title: {
				text: 'Total percent market share'
			}
		},
		plotOptions: {
			pie: {
				shadow: false
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.y +' ';
			}
		},
		series: [{
			name: 'Dager',
			data: browserData,
			size: '60%',
			dataLabels: {
				formatter: function() {
					return this.y > 5 ? this.point.name : null;
				},
				color: 'white',
				distance: -30
			}
		}, {
			name: 'Versions',
			data: versionsData,
			innerSize: '60%',
			dataLabels: {
				formatter: function() {
					// display only if larger than 1
					//return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +''  : null;
				}
			}
		}]
	};
	$.getJSON('weekdayServe.php', function(data) {
		//var colors = Highcharts.getOptions().colors
		/* data will hold the php array as a javascript object */
		var i=0;
		$.each(data, function(key, val) {
			browserData.push({
				name: val.day,
				y:val.tot,
				color:colors[i]
			});
			versionsData.push({
				name:"NtnuIT",
				y:val.c,
				color:colors[6]
			});
				versionsData.push({
				name:"SVT IT og IT HF",
				y:val.b,
				color:colors[7]
			});
			versionsData.push({
				name:"Annet",
				y:val.a,
				color:colors[8]
			});
			i++;
			//$('ul').append('<li id="' + key + '">' + val.day + ' ' + val.tot + ' ' + val.a + ' ' + val.b + ' ' + val.c + '</li>');
		});

		chart = new Highcharts.Chart(options);
	});				
});