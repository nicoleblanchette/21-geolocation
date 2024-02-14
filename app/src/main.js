const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

const handleOrientation = e => {
  const compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
  arrow.style.transform = `rotate(${compass}deg)`;
  speed.textContent = compass;
};

const requestOrientationPermission = () => {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == "granted") {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    })
    .catch(console.error);
};

const isIOS = (() => {
  const iosQuirkPresent = () => {
    const audio = new Audio();
    audio.volume = 0.5;
    return audio.volume === 1; // volume cannot be changed from "1" on iOS 12 and below
  };

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAppleDevice = navigator.userAgent.includes("Macintosh");
  const isTouchScreen = navigator.maxTouchPoints >= 1; // true for iOS 13 (and hopefully beyond)

  return isIOS || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
})();

console.log(isIOS); // Outputs true if the device is iOS or a touch-enabled Apple device

if (isIOS) {
	const button = document.createElement("button")
	button.type = "button"
	button.textContent = "Request orientation permission"
	document.body.append(button)
	button.addEventListener("click", requestOrientationPermission)
};
window.addEventListener("deviceorientation", handleOrientation);

