

document.addEventListener('DOMContentLoaded', function () {
	let loadingScreen = document.getElementById('loading-screen');
	let progressBar = document.getElementById('loading-bar');
	let currentPercentage = 0;

	function animateLoading() {
		if (currentPercentage <= 140) {
				progressBar.style.width = currentPercentage + '%';
				currentPercentage++;
				setTimeout(animateLoading, 10);
		} else {
				loadingScreen.style.opacity = 0;
				setTimeout(function () {
					loadingScreen.style.display = 'none';
					document.body.style.overflow = 'auto';
				}, 500);
				
				window.scrollTo(0, 0);
		}
	}

	animateLoading();
	
	setTimeout(function () {
		loadingScreen.style.pointerEvents = 'none';
	}, 1000);


});