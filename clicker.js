function addPonintCount() {
  chrome.storage.local.get("channelPointCount", (res) => {
    let x = res.channelPointCount
    if (x == undefined) {
      x = 0
    }
    chrome.storage.local.set({ channelPointCount: x + 1 })
  })
}
function getButton() {
  return document.getElementsByClassName("tw-button tw-button--success")
}

if (getButton().length > 0) {
  getButton()[0].click()
  addPonintCount()
}
