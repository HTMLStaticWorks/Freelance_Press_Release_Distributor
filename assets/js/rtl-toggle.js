document.addEventListener('DOMContentLoaded', () => {
    const rtlToggle = document.getElementById('rtl-toggle');
    const html = document.documentElement;
    const bootstrapLink = document.querySelector('link[href*="bootstrap.min.css"]');
    
    const RTL_CSS = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css';
    const LTR_CSS = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';

    // Check for saved RTL state
    const savedRTL = localStorage.getItem('rtl') === 'true';
    if (savedRTL) {
        enableRTL();
    }

    if (rtlToggle) {
        rtlToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isRTL = html.getAttribute('dir') === 'rtl';
            if (isRTL) {
                disableRTL();
            } else {
                enableRTL();
            }
        });
    }

    function enableRTL() {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        if (bootstrapLink) bootstrapLink.href = RTL_CSS;
        if (rtlToggle) rtlToggle.innerText = 'LTR';
        localStorage.setItem('rtl', 'true');
    }

    function disableRTL() {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        if (bootstrapLink) bootstrapLink.href = LTR_CSS;
        if (rtlToggle) rtlToggle.innerText = 'RTL';
        localStorage.setItem('rtl', 'false');
    }
});
