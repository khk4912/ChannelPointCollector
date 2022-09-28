function clickPoint() {
  let button = document.getElementsByClassName("claimable-bonus__icon")

  if (button.length > 0) {
    button[0].click()
    addPointCount()
  }
}

async function addPointCount() {
  let x = await getFromStorage("channelPointCount")
  if (x == undefined) {
    x = 0
  }
  await setStorageKey("channelPointCount", x + 1)
}

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

setInterval(clickPoint, 1000)
