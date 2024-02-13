const arrow = document.querySelector(".arrow")
const speed = document.querySelector(".speed-value")
const coords = document.querySelector("#coords")


navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  coords.textContent = data.coords.latitude
}, (err) => {
  console.error(err);
});
