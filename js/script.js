function openNav() {
    document.getElementById("sideNav").style.cssText = "width: 25rem; opacity: 100%;";
}

function closeNav() {
    document.getElementById("sideNav").style.cssText = "width: 0; opacity: 0;";
}

window.addEventListener("load", (event) => {
    const countAll = document.querySelectorAll('.box').length;
    console.log(`Počet příspěvků: ${countAll}`);
    const halfBoxes = document.querySelectorAll('.half-box').length;
    const fullBoxes = document.querySelectorAll('.full-box').length;
    const halfBoxHeight = document.querySelector('.half-box').offsetHeight;
    const fullBoxHeight = document.querySelector('.full-box').offsetHeight;
    const heightAll = halfBoxes * halfBoxHeight + fullBoxes * fullBoxHeight;
    console.log(`Průměrná výška příspěvků: ${heightAll / countAll}px`);
    const header = document.querySelectorAll('.article-header');
    let totalCharacters = 0;
    header.forEach(function(element) {
        totalCharacters += element.textContent.length;
    });
    console.log(`Součet délek nadpisů příspěvků: ${totalCharacters}`);
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            const spans = box.querySelectorAll('.footer-date');
            spans.forEach(function(span) {
                const text = span.textContent.replace(/ \//g, ',');
                console.log(`Výpis příspěvku: ${text}`);
            });
        });
    });
});