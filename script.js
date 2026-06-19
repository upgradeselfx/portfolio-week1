const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}
updateClock();
setInterval(updateClock, 1000);

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('%c> SYSTEM_INITIALIZED', 'color: #d4ff00; font-family: monospace; font-size: 14px;');
console.log('%c> Welcome to Mohamad Rosyadi\'s portfolio.', 'color: #888; font-family: monospace;');
console.log('%c> Built with pure HTML, CSS, and Vanilla JS.', 'color: #888; font-family: monospace;');
console.log('%c> Contact: mohamadrosyad1927@gmail.com', 'color: #888; font-family: monospace;');