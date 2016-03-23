//receive messages from Slack (i.e. Slackpomodoro start, stop)

function alertWork() {
  var seconds = new Date().getTime() / 1000;
  var message = "It's " + seconds + ". Get working!";
  postToSlack(message);
  startBreakTimer();
}

function alertBreak() {
  var seconds = new Date().getTime() / 1000;
  var message = "It's " + seconds + ". Take a break!"
  postToSlack(message);
  startWorkTimer();
}

function postToSlack(text) {
  var url = 'https://hooks.slack.com/services/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';

  $.ajax({
      data: 'payload=' + JSON.stringify({
          "text": text,
          "channel": "slackpomodoro"
      }),
      dataType: 'json',
      processData: false,
      type: 'POST',
      url: url
  });
}

function startWorkTimer() {
  setTimeout(alertWork, 10000);
}

function startBreakTimer() {
  setTimeout(alertBreak, 30000);
}

alertWork();
