function getFromStorage(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(key, (res) => {
        if (res[key] == undefined) {
          resolve(0)
        } else {
          resolve(res[key])
        }
      })
    } catch (e) {
      reject(e)
    }
  })
}

function setStorageKey(key, value) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]: value }, () => {
        resolve()
      })
    } catch (e) {
      reject(e)
    }
  })
}

async function updateCount() {
  let n = await getFromStorage("channelPointCount")
  console.log(n)

  document.getElementById("count").innerHTML = n.toLocaleString("ko-KR")
  document.getElementById("point").innerHTML = (n * 50).toLocaleString("ko-KR")
}

window.onload = () => {
  chrome.storage.onChanged.addListener(updateCount)
  updateCount()
}
