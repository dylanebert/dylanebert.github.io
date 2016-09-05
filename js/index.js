var line = document.getElementById("line");
var length = line.getTotalLength();

line.style.strokeDasharray = length;
line.style.strokeDashoffset = length;

window.addEventListener("scroll", myFunction);
myFunction();

var tsctx = $('#techSkillsChart');
var plctx = $('#progLangChart');
var hlctx = $('#humanLangChart');
var techSkillsChart = new Chart(tsctx, {
	type: 'horizontalBar',
	data: {
		labels: ['Unity', 'Blender', 'Photoshop', 'Matlab', 'Node', 'SPSS', 'Visual Studio', 'MongoDB'],
		datasets: [{
			label: '',
			data: [90, 80, 70, 60, 80, 50, 60, 60],
			backgroundColor: [
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)',
				'rgb(26, 188, 156)',
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)',
				'rgb(26, 188, 156)',
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)',
				'rgb(26, 188, 156)',
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)'
			]
		}],
	},
	options: {
		scales: {
			xAxes: [{
				ticks: {
					min: 0,
					max: 100,
					stepSize: 20
				}
			}]
		},
		legend: {
			display: false
		}
	}
});
var progLangChart = new Chart(plctx, {
	type: 'horizontalBar',
	data: {
		labels: ['C#', 'Python', 'Java', 'C', 'C++', 'JavaScript', 'CSS', 'SQL'],
		datasets: [{
			label: '',
			data: [80, 80, 90, 50, 40, 90, 90, 70],
			backgroundColor: [
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)',
				'rgb(26, 188, 156)',
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)',
				'rgb(26, 188, 156)',
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)',
				'rgb(26, 188, 156)',
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)'
			]
		}],
	},
	options: {
		scales: {
			xAxes: [{
				ticks: {
					min: 0,
					max: 100,
					stepSize: 20
				}
			}]
		},
		legend: {
			display: false
		}
	}
});
var humanLangChart = new Chart(hlctx, {
	type: 'horizontalBar',
	data: {
		labels: ['English', 'Swedish', 'German', 'Dutch'],
		datasets: [{
			label: '',
			data: [100, 80, 60, 30],
			backgroundColor: [
				'rgb(52, 73, 94)',
                'rgb(52, 152, 219)',
				'rgb(26, 188, 156)',
				'rgb(52, 73, 94)'
			]
		}],
	},
	options: {
		scales: {
			xAxes: [{
				ticks: {
					min: 0,
					max: 100,
					stepSize: 20
				}
			}]
		},
		legend: {
			display: false
		}
	}
});

function myFunction() {
	var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	var draw = length * (scrollpercent + 0.05) * 0.5;
	line.style.strokeDashoffset = length - draw;
}