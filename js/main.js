/*
=======================
BOTTINI FUEL CLONE - JAVASCRIPT
Created by Pixel Perfect Designs
=======================
*/

// Basic functionality only - no animations to match original Bottini page
document.addEventListener('DOMContentLoaded', function() {
    
    // Basic anchor links (no smooth scrolling)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'auto',  // Changed from 'smooth' to 'auto'
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (if implemented)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Form validation (if forms are added)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
    
});

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'auto'  // Changed from 'smooth' to 'auto'
    });
}

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isOpen = content.style.maxHeight;
    
    if (isOpen) {
        content.style.maxHeight = null;
        element.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        element.classList.add('active');
    }
}

// Performance monitoring
function logPerformance() {
    window.addEventListener('load', function() {
        const perfData = performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    });
}

// Initialize performance monitoring
logPerformance();
