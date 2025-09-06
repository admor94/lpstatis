// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', (event) => {

    // Script untuk Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Script untuk FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('svg');

            const isOpening = !answer.style.maxHeight;

            // Tutup semua jawaban lain sebelum membuka yang baru
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = null;
                if (ans.previousElementSibling.querySelector('svg')) {
                   ans.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
                }
            });

            if (isOpening) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                if (icon) {
                    icon.style.transform = 'rotate(180deg)';
                }
            }
            // Jika yang diklik sudah terbuka, ia akan tertutup oleh loop di atas
        });
    });

    // Script untuk smooth scroll, ini penting karena class="scroll-smooth" 
    // mungkin tidak berfungsi di dalam laman statis Blogspot
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

