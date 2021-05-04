const twitchClicker = (tabID) => {
  chrome.tabs.executeScript(tabID, {
    file: "clicker.js",
  })
}

const twitchWatcher = () => {
  chrome.tabs.query({}, (results) => {
    results.forEach((x) => {
      if (x.url.startsWith("https://www.twitch.tv")) {
        twitchClicker(x.id)
      }
    })
  })
}

setInterval(twitchWatcher, 2000)
