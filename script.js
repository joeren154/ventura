 // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header Background on Scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'white';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }
        });