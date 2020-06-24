let onoffHandler = () => {
    let chkBox = document.getElementById("onoff")
    let chkLabel = document.getElementById("checklabel")

    if (chkBox.checked) {
        chkLabel.innerHTML = "ON"
    } else {
        chkLabel.innerHTML = "OFF"
    }
}




onoffHandler()
document.getElementById("onoff").onchange = onoffHandler
