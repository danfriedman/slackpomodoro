// Get talking to Slack API
// Then we'll do Node App

function alertWork() {
  var seconds = new Date().getTime() / 1000;
  $('body').append("<p>It's " + seconds + ". Get working!</p>");
  startBreakTimer();
}

function alertBreak() {
  var seconds = new Date().getTime() / 1000;
  $('body').append("<p>It's " + seconds + ". Take a break!</p>");
  startWorkTimer();
}

function startWorkTimer() {
  setTimeout(alertWork, 1000);
}

function startBreakTimer() {
  setTimeout(alertBreak, 3000);
}

alertWork();