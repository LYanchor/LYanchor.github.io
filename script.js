document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // Normalize path logic:
    // 1. Get the last segment of the path.
    // 2. If it's empty or ends with '/', treat it as 'index.html'.
    let filename = currentPath.split('/').pop();
    if (filename === '' || filename.endsWith('/')) {
        filename = 'index.html';
    }

    sidebarLinks.forEach(link => {
        // Get the href attribute (e.g., "tech.html")
        const href = link.getAttribute('href');
        
        // Simple comparison: strict match
        if (href === filename) {
            link.classList.add('active');
            
            // NOTE: Style changes are now handled entirely by CSS (.sidebar-link.active)
            // No more inline JS styles needed.
        } else {
            link.classList.remove('active');
        }
    });
});
