var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function() {
	bannerLoops();
}

var startBannerLoop = setInterval(function() {
	bannerLoops();
}, bannerTimer);

var mainBanner = document.getElementById("mainBanner");
mainBanner.onmouseenter =function() {
	clearInterval(startBannerLoop);
}

mainBanner.onmouseleave = function() {
	startBannerLoop =  setInterval(function() {
		bannerLoops();
	}, bannerTimer);
}

document.getElementById("imgbanbtn-prev").addEventListener("click", function () {
	if(bannerStatus === 1) {
		bannerStatus = 2;
	}
	else if(bannerStatus === 2) {
		bannerStatus = 3;
	}
	else if(bannerStatus === 3 ) {
		bannerStatus = 1;
	}
	bannerLoops();
})

document.getElementById("imgbanbtn-next").addEventListener("click", function () {
	bannerLoops();
})

function bannerLoops() {
	if (bannerStatus === 1) {
		var imgban1 = document.getElementById("imgban1");
		var imgban2 = document.getElementById("imgban2");
		var imgban3 = document.getElementById("imgban3");
		imgban2.style.opacity = "0";
		
		setTimeout(function() {
		
		imgban1.style.right = "0px";
		imgban1.style.zIndex = "1000";
		imgban2.style.right = "-1000px";
		imgban2.style.zIndex = "1400";
		imgban3.style.right = "1000px";
		imgban3.style.zIndex = "700";	
		}, 500);
		
		setTimeout(function() {
			imgban2.style.opacity = "1";
		}, 1000)
		
		bannerStatus = 2;
	}
	
	else if (bannerStatus === 2) {
			var imgban1 = document.getElementById("imgban1");
			var imgban2 = document.getElementById("imgban2");
			var imgban3 = document.getElementById("imgban3");
		imgban3.style.opacity = "0";
		
		setTimeout(function() {
		
		imgban2.style.right = "0px";
		imgban2.style.zIndex = "1000";
		imgban3.style.right = "-1000px";
		imgban3.style.zIndex = "1400";
		imgban1.style.right = "1000px";
		imgban1.style.zIndex = "700";	
		}, 500);
		
		setTimeout(function() {
			imgban3.style.opacity = "1";
		}, 1000);
		
		bannerStatus = 3;
	}
	
	else if (bannerStatus === 3) {
			var imgban1 = document.getElementById("imgban1");
			var imgban2 = document.getElementById("imgban2");
			var imgban3 = document.getElementById("imgban3");
		imgban1.style.opacity = "0";
		
		setTimeout(function() {
		
		imgban3.style.right = "0px";
		imgban3.style.zIndex = "1000";
		imgban1.style.right = "-1000px";
		imgban1.style.zIndex = "1400";
		imgban2.style.right = "1000px";
		imgban2.style.zIndex = "700";	
		}, 500);
		
		setTimeout(function() {
			imgban1.style.opacity = "1";
		}, 1000);
		
		bannerStatus = 1;
	}
	
}

