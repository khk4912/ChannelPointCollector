import { getRecords } from './utils/local_storage'
import { addStreamerDOM } from './utils/recordDOM'

const changeToMain = (): void => {
  window.location.href = './popup.html'
}

const reset = (): void => {
  alert('정말로 초기화?')
}

const backButton = document.getElementById('backButton')
backButton?.addEventListener('click', changeToMain)

const resetButton = document.getElementById('resetButton')
resetButton?.addEventListener('click', reset)

async function init(): Promise<void> {
  const records = await getRecords()

  const recordsContainer = document.getElementById(
    'recordsContainer',
  ) as HTMLDivElement

  if (records === undefined) {
    return
  }

  await addStreamerDOM(records, recordsContainer)
}

void init()
