function getPointCountFromStorage() {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get("channelPointCount", (res) => {
        if (res.channelPointCount == undefined) {
          resolve(0)
        } else {
          resolve(res.channelPointCount)
        }
      })
    } catch (e) {
      reject()
    }
  })
}

function updateCount() {
  getPointCountFromStorage().then((n) => {
    document.getElementById("count").innerHTML = n.toLocaleString("ko-KR")
    document.getElementById("point").innerHTML = (n * 50).toLocaleString(
      "ko-KR"
    )
  })
}

window.onload = () => {
  chrome.storage.onChanged.addListener(updateCount)
  updateCount()
}
