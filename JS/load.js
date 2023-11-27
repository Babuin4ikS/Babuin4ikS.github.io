document.addEventListener('DOMContentLoaded', function () {
	let loadingScreen = document.getElementById('loading-screen');
	let progressBar = document.getElementById('loading-bar');
	let currentPercentage = 0;

	function animateLoading() {
		if (currentPercentage <= 100) {
				progressBar.style.width = currentPercentage + '%';
				currentPercentage++;
				setTimeout(animateLoading, 20);
		} else {
				loadingScreen.style.opacity = 0;
				setTimeout(function () {
					loadingScreen.style.display = 'none';
					document.body.style.overflow = 'auto'; // Restabilim overflow după animație
				}, 500);
		}
	}

	animateLoading();

	// Eliminarea ecranului de încărcare din fluxul normal al documentului
	setTimeout(function () {
		loadingScreen.style.pointerEvents = 'none';
	}, 1000);
});