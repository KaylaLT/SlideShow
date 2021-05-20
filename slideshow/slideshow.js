(function () {

	const images = [
		"./assets/chi2.jpg", 
		"./assets/girl.jpg",
		"./assets/chi10.jpg",
		"./assets/girl5.jpg",
		"./assets/chi3.jpg"
	]
    // const image = document.getElementById('image');
	let position = 0;

	document.getElementById('previous').addEventListener("click", () => {
       // image.setAttribute('src', images[0]);
	   position = position - 1;
	   const image = document.getElementById('image');
	   image.src = images[position];
	});

	document.getElementById('next').addEventListener("click", () => {
		position = position + 1;
		const image = document.getElementById('image');
		image.src = images[position];
       // image.setAttribute('src', images[1])
	});



})();