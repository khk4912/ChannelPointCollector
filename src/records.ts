import { getRecords } from './utils/local_storage'
import { addStreamerDOM } from './utils/recordDOM'

const changeToMain = (): void => {
  window.location.href = './popup.html'
}

const backButton = document.getElementById('backButton')
backButton?.addEventListener('click', changeToMain)

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
