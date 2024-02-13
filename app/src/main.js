const arrow = document.querySelector(".arrow")
const speed = document.querySelector(".speed-value")
const coords = document.querySelector("#coords")

// navigator.geolocation.watchPosition(
// 	data => {
// 		console.log(data)
// 		console.log(data.coords.heading)
// 		speed.textContent = data.coords.speed
// 		arrow.style.transform = `rotate(${data.coords.latitude}deg)`
// 		coords.textContent = data.coords.latitude
// 	},
// 	err => {
// 		console.error(err)
// 	}
// )

const handleOrientation = e => {
  const compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
  arrow.style.transform = `rotate(${compass}deg)`
}

window.addEventListener("deviceorientation", handleOrientation)
