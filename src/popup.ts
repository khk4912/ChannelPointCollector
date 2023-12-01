import { getChannelPointInfo } from './utils/local_storage'
import { minutesConverter } from './utils/minutesConverter'

const counter = document.getElementById('count')
const calculatedPoints = document.getElementById('calculatedPoints')
const calculatedTimeText = document.getElementById('calculatedTimeText')

const changeToRecordsPage = (): void => {
  window.location.href = 'records.html'
}

async function updateCounter(): Promise<void> {
  const records = await getChannelPointInfo()
  console.log(records)

  if (
    counter === null ||
    calculatedPoints === null ||
    calculatedTimeText === null
  ) {
    return
  }

  counter.textContent = records.cnt.toLocaleString()
  calculatedPoints.textContent = (records.cnt * 50).toLocaleString()
  calculatedTimeText.textContent = `(${minutesConverter(records.cnt * 15)})`
}

void updateCounter()

chrome.storage.local.onChanged.addListener(() => {
  void updateCounter()
})

const showRecordsButton = document.getElementById('recordsButton')
showRecordsButton?.addEventListener('click', changeToRecordsPage)
