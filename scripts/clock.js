setInterval("update_clock();",1000);
function update_clock() {
	var date = new Date();
	var s;
	var m;
	if (10 > date.getSeconds()) {
	s='0';
	} else {
		s='';
	}
	if (10 > date.getMinutes()) {
		m='0';
	} else {
		m='';
	}
	$('.clock').text(date.getHours()+':'+m+date.getMinutes()+':'+s+date.getSeconds())
}
