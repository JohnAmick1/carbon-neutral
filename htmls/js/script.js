document.addEventListener('DOMContentLoaded', () => {
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('.plan-info-section');

    // Function to change the active section
    function changeSection(newIndex) {
        if (newIndex >= 0 && newIndex < sections.length) {
            sections[currentSectionIndex].classList.remove('active');
            currentSectionIndex = newIndex;
            sections[currentSectionIndex].classList.add('active');
        }
    }

    // Initially show the first section
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }

    // Create and append buttons for navigation
    const navButtons = document.createElement('div');
    navButtons.style.position = 'absolute';
    navButtons.style.top = '330px';
    navButtons.style.right = '40px';
    navButtons.style.zIndex = '1000';
    navButtons.innerHTML = `
    <button id="btnBackward" style="width: 60px; height: 40px; background-color: rgb(50,165,181); color: white; font-size: 20px; padding: 10px 20px;"><</button>
    <button id="btnForward" style="width: 60px; height: 40px; background-color: rgb(50,165,181); color: white; font-size: 20px; padding: 10px 20px;">></button>
    `;
    document.body.appendChild(navButtons);

    // Attach event listeners to the buttons
    document.getElementById('btnForward').addEventListener('click', () => changeSection(currentSectionIndex + 1));
    document.getElementById('btnBackward').addEventListener('click', () => changeSection(currentSectionIndex - 1));
});