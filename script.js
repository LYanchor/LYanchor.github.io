document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // Normalize path for GitHub Pages (which might be /repo-name/index.html)
    // We just check if the href ends with the current filename
    const filename = currentPath.split('/').pop() || 'index.html';

    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if this link corresponds to the current page
        if (href === filename || (filename === '' && href === 'index.html')) {
            link.classList.add('active');
            
            // Add "electrified" glow effect via inline style or class
            const icon = link.querySelector('i');
            if (icon) {
                icon.style.filter = 'drop-shadow(0 0 5px #00f3ff)';
            }
        } else {
            // Remove highlighting just in case
            link.classList.remove('active');
        }
    });

    // Mobile Menu Toggle (Optional enhancement if sidebar is hidden on mobile)
    // For now, we rely on responsive CSS classes.
});
