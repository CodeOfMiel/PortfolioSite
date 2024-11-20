document.addEventListener('DOMContentLoaded', () => {
    // Logo click to home
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    logo.style.cursor = 'pointer'; // Change cursor to pointer on hover

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Lazy loading and reveal effect for gallery images
    const galleryImages = document.querySelectorAll('.gallery img');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                img.classList.add('reveal');
                observer.unobserve(img);
            }
        });
    }, observerOptions);

    galleryImages.forEach(img => {
        img.classList.add('hidden');
        imageObserver.observe(img);
    });

    // Lightbox for gallery images
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const galleryContainer = document.querySelector('.gallery');
    if (galleryContainer) {
        galleryContainer.addEventListener('click', e => {
            if (e.target.tagName === 'IMG') {
                openLightbox(e.target.src);
            }
        });
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="Enlarged photo">
            <span class="close-lightbox">&times;</span>
        </div>
    `;
    lightbox.style.display = 'flex';

    const closeLightbox = lightbox.querySelector('.close-lightbox');
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Update the form's action attribute to use FormSubmit
    const form = e.target;
    form.action = "https://formsubmit.co/21f9b84304e32d93eacb75460ae71287";
    form.method = "POST";
    
    // Submit the form
    form.submit();
}

function updateBreadcrumbs() {
    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
        const currentPage = document.title.split(' - ')[1] || 'Home';
        const currentPageElement = breadcrumbs.querySelector('.current-page');
        if (currentPageElement) {
            currentPageElement.textContent = currentPage;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    // Blur fade-in effect for home page elements
    const fadeElems = document.querySelectorAll('.blur-fade-in');
    setTimeout(() => {
        fadeElems.forEach((elem, index) => {
            setTimeout(() => {
                elem.classList.add('appear');
            }, 200 * index); // Stagger the fade-in effect
        });
    }, 300); // Slight delay before starting the effect

    // Update breadcrumbs
    updateBreadcrumbs();


});