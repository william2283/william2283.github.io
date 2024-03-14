var videoPlayer = document.getElementById('VideoPlayer');
var videoSources = [
  'celula.mp4',
  'breno.mp4',
  'matheus.mp4',
  'piu.mp4',
  'william.mp4'
];
var currentIndex = 0;

videoPlayer.addEventListener('ended', function() {
  currentIndex = (currentIndex + 1) % videoSources.length;

  
  if (currentIndex === 0) {
    videoPlayer.src = videoSources[currentIndex];
    videoPlayer.pause();
  } else {
    videoPlayer.src = videoSources[currentIndex];
    videoPlayer.play();
  }
});
