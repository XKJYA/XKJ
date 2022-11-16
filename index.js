

var banner_p = document.querySelector(".banner_p");
var next = document.querySelector(".arrow_right");
var pre = document.querySelector(".arrow_left");

var timer = null;
var banner = document.querySelector(".banner");

var index = 0;
var dots = document.getElementsByTagName("span");


next.onclick = function () {
	next_p();
}
pre.onclick = function () {
	pre_p();
}

function next_p() {
	index++;
	if (index > 5) {
		index = 0;
	}
	showCurrentDot();
	var newLeft;
	if (banner_p.style.left === "-8400px") {
		newLeft = -2400;
	} else {
		newLeft = parseInt(banner_p.style.left) - 1200;
	}
	banner_p.style.left = newLeft + "px";
}

function pre_p() {
	index--;
	if (index < 0) {
		index = 5;
	}
	showCurrentDot();
	var newLeft;
	if (banner_p.style.left === "0px") {
		newLeft = -7200;
	} else {
		newLeft = parseInt(banner_p.style.left) + 1200;
	}
	banner_p.style.left = newLeft + "px";
}


function autoPlay() {
	timer = setInterval(function () {
		next_p();
	}, 3000);
}
autoPlay();

function showCurrentDot() {
	for (var i = 0, len = dots.length; i < len; i++) {
		dots[i].className = "";
	}
	dots[index].className = "on";
}

banner.onmouseenter = function () {
	clearInterval(timer);
}
banner.onmouseleave = function () {
	autoPlay();
}



for (var i = 0, len = dots.length; i < len; i++) {
	(function (i) {
		dots[i].onclick = function () {
			var dis = index - i;
			if (index == 6 && parseInt(banner_p.style.left) !== -7200) {
				dis = dis - 7;
			}

			if (index == 0 && parseInt(banner_p.style.left) !== -1200) {
				dis = 7 + dis;
			}
			banner_p.style.left = (parseInt(banner_p.style.left) + dis * 1200) + "px";
			index = i;
			showCurrentDot();
		}
	})(i);
}



