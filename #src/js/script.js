let startTime,
	animationTime = 15,
	percentContainer = document.querySelector('.percent span'),
	loadingLine = document.querySelector('.loading-line .loading-line__done');

const animation = () => {
	startTime = startTime || new Date()
	let endTime = new Date();
	if (endTime - startTime < animationTime * 1000) {
		percentContainer.innerHTML = Math.round((endTime - startTime) / (animationTime * 1000) * 100)
		loadingLine.style.width = `${(endTime - startTime) / (animationTime * 1000) * 100}%`
		requestAnimationFrame(animation)
	}
}

window.addEventListener('load', () => {
	requestAnimationFrame(animation)
})
