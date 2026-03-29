let params = new URLSearchParams(location.search);
document.querySelector("#txt-search").value = params.has('q') ? params.get('q') : "";
document.querySelector('#txt-search').value = params.get('q');




// Google CSE highlight renklerini mavi'dan yeþil'e çevir
function fixCSEColors() {
    // Tüm elementleri kontrol et
    document.querySelectorAll('[style*="color"]').forEach(el => {
        const style = el.getAttribute('style');
        if (style.includes('blue') || style.includes('#0000ff') || style.includes('#00f')) {
            el.style.color = '#00ff00';
        }
    });
    
    // Tüm em taglarýný yeþil yap
    document.querySelectorAll('em').forEach(el => {
        el.style.color = '#00ff00';
    });
}

// Sayfada deðiþiklik olunca çalýþtýr
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixCSEColors);
} else {
    fixCSEColors();
}

// Dinamik olarak eklenen elemanlarý da izle
const observer = new MutationObserver(fixCSEColors);
observer.observe(document.body, { childList: true, subtree: true });
