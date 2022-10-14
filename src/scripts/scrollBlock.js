
export function scrollAvailable() {
	document.body.style.overflowY = "scroll";
    console.log('scrollAvailable')
}
export function scrollNotAvailable() {
	document.body.style.overflowY = "hidden";
    console.log('scrollNotAvailable')
}