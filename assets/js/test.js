let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '415',
    width: '100%',
    playerVars: { 
      listType:'playlist', 
      list: 'RDKAQWzHokZXg'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onStoped': onStoped
    }
  });
}
                         
function onStoped(event) {
  event.target.playVideo();
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    event.target.unMute();
    event.target.playVideo();
  }
}
