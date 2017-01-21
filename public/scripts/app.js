angular
  .module('univJam', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
  templateUrl: 'home.ejs'
  })
  .when('/profile', {
    templateUrl: 'profile.ejs',
    controller: 'UnivJamController'
  })
  .when('/login', {
    templateUrl: 'login.ejs'
  })
  .when('/signup', {
    templateUrl: 'signup.ejs'
  })
  .when('/playlist/:id', {
    templateUrl: 'playlist.ejs',
    controller: 'UnivJamController'
  }).otherwise({
    redirectTo: '/'
  })
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

function onYouTubeIframeAPIReadyx() {
  var ctrlq = document.getElemntById("youtube-audio")

  var icons = document.createElement("img");
  icon.setAttribute("id", "youtube-icon");
  icon.style.cssText = "cursor:pointer;cursor:hand";
  ctrlq.appendChild(icon);

  var div = document.createElement("div");
  div.setAttribute("id", "youtube-player");
  ctrlq.appendChild(div);

  var toggleButton = function (play) {
    var img = play ? "IDzX9gl.png" : "quyUPXN.png";
    icon.setAttribute("src", "https://i.imgur.com/" + img);
  }

  ctrlq.onClick = function () {
    if (player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ) {
      player.pauseVideio();
      toggleButton(false);
    } else {
      player.playVideo();
      toggleButton(true);
    }
  };

  var player = new YT.Player('youtube-player', {
    height: '10',
    width: '10',
    videoId: ctrlq.dataset.video,
    playerVars: {
      autoplay: ctrlq.dataset.autoplay,
      loop: ctrlq.dataset.loop,
    },
    events: {
      'onReady': function(e) {
        player.setPlaybackQuality("small");
        toggleButton(player.getPlayerState() !== YT.PlayerState.CUED);
      },
      'onStateChange': function(e) {
        if (e.data === YT.PlayerState.ENDED) {
          toggleButton(flase);
        }
      }
    }
  });
}
