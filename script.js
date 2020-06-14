let onoffHandler = () => {
    let chkBox = document.getElementById("onoff")
    let chkLabel = document.getElementById("checklabel")

    if (chkBox.checked) {
        chkLabel.innerHTML = "ON"
    } else {
        chkLabel.innerHTML = "OFF"
    }
}

let twitchClicker = () => {
    chrome.tabs.executeScript({
        code: 'let pointButton = document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0]'
    })
}

window.onload = (evt) => {
    onoffHandler()
}

document.getElementById("onoff").onchange = onoffHandler
