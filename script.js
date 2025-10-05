document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Logika Formulir Kontak (Simulasi)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Di sini Anda akan mengirim data formulir ke backend atau layanan email
            // Untuk demonstrasi, kita hanya akan memberikan alert
            alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.');

            // Reset formulir setelah pengiriman
            contactForm.reset();
        });
    }
});
