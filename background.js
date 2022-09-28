const twitchTabs = []

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    if (tab.url.includes("twitch.tv") && !twitchTabs.includes(tabId)) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["clicker.js"],
      })

      twitchTabs.push(tabId)
    }
  }
})

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  if (twitchTabs.includes(tabId)) {
    twitchTabs.splice(twitchTabs.indexOf(tabId), 1)
  }
})
