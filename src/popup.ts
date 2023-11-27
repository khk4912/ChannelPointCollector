import { getChannelPointInfo } from './utils/local_storage'

const counter = document.getElementById('count')
const calculatedPoints = document.getElementById('calculatedPoints')

async function updateCounter(): Promise<void> {
  const records = await getChannelPointInfo()
  console.log(records)

  if (counter === null || calculatedPoints === null) {
    return
  }

  counter.textContent = records.cnt.toLocaleString()
  calculatedPoints.textContent = (records.cnt * 50).toLocaleString()
}

void updateCounter()

chrome.storage.local.onChanged.addListener(() => {
  void updateCounter()
})
