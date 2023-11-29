import { getRecords } from './utils/local_storage'
import { streamerRecordDOM } from './utils/recordDOM'

const changeToMain = (): void => {
  window.location.href = './popup.html'
}

const backButton = document.getElementById('backButton')
backButton?.addEventListener('click', changeToMain)

async function init(): Promise<void> {
  const records = await getRecords()
  const recordsDivs: HTMLDivElement[] = []

  if (records === undefined) {
    return
  }

  for (const [id, record] of Object.entries(records)) {
    recordsDivs.push(streamerRecordDOM(id, record?.cnt ?? 0))
  }

  const recordsContainer = document.getElementById(
    'recordsContainer',
  ) as HTMLDivElement
  recordsDivs.forEach((div) => recordsContainer.appendChild(div))
}

void init()
