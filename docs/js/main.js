// Highlight active navigation item and handle dropdown
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Home link functionality
    const logoTitle = document.querySelector('.sidebar-header h1');
    if (logoTitle) {
        logoTitle.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Dropdown functionality
    const dropdownToggles = document.querySelectorAll('.nav-item.has-dropdown');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = toggle.nextElementSibling;
            const isOpen = dropdown.classList.contains('open');
            
            // Close all dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
            document.querySelectorAll('.nav-item.has-dropdown').forEach(t => t.classList.remove('open'));
            
            // Toggle current dropdown
            if (!isOpen) {
                dropdown.classList.add('open');
                toggle.classList.add('open');
            }
        });
    });

    // Highlight active page
    const navLinks = document.querySelectorAll('.nav-sub-item, .nav-dropdown-item');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            // Open parent dropdown if exists
            const parentDropdown = link.closest('.nav-dropdown');
            if (parentDropdown) {
                parentDropdown.classList.add('open');
                const toggle = parentDropdown.previousElementSibling;
                if (toggle) toggle.classList.add('open');
            }
        }
    });

    // Prevent navigation for disabled links
    const disabledLinks = document.querySelectorAll('.nav-sub-item.disabled');
    disabledLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('이 섹션은 현재 준비 중입니다.');
        });
    });

    // Add smooth scroll animation for page load
    const contentSections = document.querySelectorAll('.content-section, .card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    contentSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Made with Bob
