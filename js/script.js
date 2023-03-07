function openNav() {
    document.getElementById("sideNav").style.cssText = "width: 25rem; opacity: 100%;";
}

function closeNav() {
    document.getElementById("sideNav").style.cssText = "width: 0; opacity: 0;";
}

window.addEventListener("load", (event) => {
    const slicePosts = document.querySelectorAll('.slice .article-box');
    const heights = [];
    slicePosts.forEach(post => {
        const height = post.clientHeight;
        heights.push(height);
    });
    const totalHeight = heights.reduce((a, b) => a + b, 0);
    const averageHeight = totalHeight / heights.length;
    console.log(`Průměrná výška příspěvků: ${averageHeight}px`);
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
    const asideElement = document.querySelector('#aside');
    const distanceFromViewportTop = asideElement.getBoundingClientRect().top;
    console.log('Při scrollu vrátit pozici sociálních ikon vůči viewportu a dokumentu: ' + distanceFromViewportTop + 'px');
});

