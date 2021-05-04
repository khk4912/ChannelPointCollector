function addPonintCount() {
    chrome.storage.local.get("channelPointCount", (res) => {
        chrome.storage.local.set({ "channelPointCount": res.channelPointCount + 1 })
    }
}
function getButton() {
  return document.getElementsByClassName("tw-button tw-button--success")
}

if (getButton().length > 0) {
  getButton()[0].click()
}
