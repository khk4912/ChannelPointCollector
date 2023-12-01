import { getRecords, initPointRecords } from './utils/local_storage'
import { addStreamerDOM } from './utils/recordDOM'

const changeToMain = (): void => {
  window.location.href = './popup.html'
}

const showResetModal = (): void => {
  const modal = document.getElementById('resetModal') as HTMLDivElement
  const recordsContainer = document.getElementById(
    'recordsContainer',
  ) as HTMLDivElement

  recordsContainer.classList.add('hidden')
  modal.classList.remove('hidden')

  console.log(modal)
}

const hideResetModal = (): void => {
  const modal = document.getElementById('resetModal') as HTMLDivElement
  const recordsContainer = document.getElementById(
    'recordsContainer',
  ) as HTMLDivElement

  recordsContainer.classList.remove('hidden')
  modal.classList.add('hidden')
}

const resetRecords = (): void => {
  initPointRecords()
    .then(() => {
      hideResetModal()
      window.location.reload()
    })
    .catch(console.error)
}

const hideLoading = (): void => {
  const loading = document.getElementById('loading') as HTMLDivElement
  loading.remove()
}

const showNoRecords = (): void => {
  const noRecords = document.getElementById('noRecordText') as HTMLDivElement
  noRecords.classList.remove('hidden')
}

const backButton = document.getElementById('backButton')
backButton?.addEventListener('click', changeToMain)

const resetButton = document.getElementById('recordResetButton')
resetButton?.addEventListener('click', showResetModal)

const resetConfirmButton = document.getElementById(
  'resetConfirmButton',
) as HTMLButtonElement
const resetCancelButton = document.getElementById(
  'resetCancelButton',
) as HTMLButtonElement

resetConfirmButton?.addEventListener('click', resetRecords)
resetCancelButton?.addEventListener('click', hideResetModal)

async function init(): Promise<void> {
  const records = await getRecords()
  const recordsContainer = document.getElementById(
    'recordsContainer',
  ) as HTMLDivElement

  if (records === undefined || Object.keys(records).length === 0) {
    console.log(records)
    hideLoading()
    showNoRecords()
    return
  }

  await addStreamerDOM(records, recordsContainer)
  hideLoading()
}

void init()
