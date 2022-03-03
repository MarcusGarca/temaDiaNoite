
const tema = () => {
    let element = document.body;
    element.classList.toggle("mod-noite");

    if (document.getElementById('styleSite').value == 'FiapOn') {
        document.getElementById('styleSite').value = "Original"
    } else {
        document.getElementById('styleSite').value = "FiapOn"
    }

}



