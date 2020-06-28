function getButton() {
    return document.getElementsByClassName("tw-button tw-button--success tw-interactive")
}

if (getButton().length > 0) {
    getButton()[0].click()
}