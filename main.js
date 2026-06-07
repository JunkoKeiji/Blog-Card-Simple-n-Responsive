let txts = document.querySelectorAll(".text");

txts.forEach((text) => {
	let stringText = text.textContent;

	if(stringText.length > 100){
		text.textContent = stringText.substring(0, 100) + "...";
		console.log(text)
	}
});

console.log('call')