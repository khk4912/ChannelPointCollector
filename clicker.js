function getButton() {
  return document.getElementsByClassName("tw-button tw-button--success")
}

if (getButton().length > 0) {
  getButton()[0].click()
}
