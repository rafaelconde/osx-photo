var video = document.getElementById('showroom-video');

function toggleMute(){
  video.muted = !video.muted;
  
  if (video.muted) {
	document.getElementById("mute-switch-off").style.opacity = "1";
	document.getElementById("mute-switch-on").style.opacity = "0";
  } else {
	document.getElementById("mute-switch-off").style.opacity = "0";
	document.getElementById("mute-switch-on").style.opacity = "1";
  }
}