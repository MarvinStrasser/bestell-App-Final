//Function for Restaurant information//
function toggleAbout(event) {
    if (event) {
        event.stopPropagation();
    }
    const box = document.getElementById('aboutUsBox');
    box.classList.toggle('show');
}