import { addCountOf } from './utils/local_storage'

const getID = (): string => new URL(location.href).pathname.split('/')[1]

function pointButtonWatcher(): void {
  const bonusIcons = document.getElementsByClassName('claimable-bonus__icon')
  const ID = getID()

  if (bonusIcons.length === 0 || ID === '') {
    return
  }

  const btn = bonusIcons[0] as HTMLElement
  btn.click()

  addCountOf(ID).then().catch(console.error)
}

setInterval(pointButtonWatcher, 5000)
