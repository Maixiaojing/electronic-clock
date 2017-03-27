var hours1 = document.getElementById("hours_1");
var hours2 = document.getElementById("hours_2");
var Minutes1 = document.getElementById("Minutes_1");
var Minutes2 = document.getElementById("Minutes_2");
var Seconds1 = document.getElementById("seconds_1");
var Seconds2 = document.getElementById("seconds_2");
var NO1 = document.getElementById("NO1");
var NO2 = document.getElementById("NO2");

setInterval(function(){
	var time = new Date();
	var hours = time.getHours();
	var Minutes = time.getMinutes();
	var Seconds = time.getSeconds();
	var year = time.getFullYear();
	var month = time.getMonth()+1;
	var day = time.getDate();
	var weekday = new Array();

	if (hours<10) {
		hours = "0"+hours;
	}
	if (Minutes<10) {
		Minutes = "0"+Minutes;
	}
	if (Seconds<10) {
		Seconds = "0"+Seconds;
	}

	hours = hours.toString();
	Minutes = Minutes.toString();
	Seconds = Seconds.toString();

	Tiao(hours[0],hours1);
	Tiao(hours[1],hours2);
	Tiao(Minutes[0],Minutes1);
	Tiao(Minutes[1],Minutes2);
	Tiao(Seconds[0],Seconds1);
	Tiao(Seconds[1],Seconds2);

	NO1.innerHTML = year+"年"+month+"月"+day+"日";
	weekday[0] = "星期日";
	weekday[1] = "星期一";
	weekday[2] = "星期二";
	weekday[3] = "星期三";
	weekday[4] = "星期四";
	weekday[5] = "星期五";
	weekday[6] = "星期六";
	NO2.innerHTML = weekday[time.getDay()];




})
var Tiao = function(x,y){
	switch(x){
		case "0":
		y.className = "zero";
		break;
		case "1":
		y.className = "one";
		break;
		case "2":
		y.className = "two";
		break;
		case "3":
		y.className = "three";
		break;
		case "4":
		y.className = "four";
		break;
		case "5":
		y.className = "five";
		break;
		case "6":
		y.className = "six";
		break;
		case "7":
		y.className = "seven";
		break;
		case "8":
		y.className = "eight";
		break;
		case "9":
		y.className = "nine";
		break;
	}
}

