// Lenis JS Initialization:
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

// Footer Dynamically Appear:
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('dynamicYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Hero Marquee Configuration:
const track = document.querySelector('.track');

// Only run if track exists
if (track) {
    track.appendChild(track.cloneNode(true));
    
    let x = 0;
    const speed = 0.5;
    
    function animate() {
        x -= speed;
        
        if (Math.abs(x) >= track.scrollWidth / 2) {
            x = 0;
        }
        
        track.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(animate);
    }
    
    animate();
}

// FAQ section JS:
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const answer = document.getElementById(targetId);
            const icon = this.querySelector('.faq-icon');
            const questionText = this.querySelector('p'); // Select the question text
            
            // Check if this answer is already open
            const isOpen = answer.style.display === 'block';
            
            // Close all answers and reset all questions
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // Reset all question texts
            document.querySelectorAll('.faq-question p').forEach(qText => {
                qText.classList.remove('color-pri');
                qText.classList.add('text-white');
            });
            
            // Reset all icons
            document.querySelectorAll('.faq-icon').forEach(icn => {
                icn.style.transform = 'rotate(0deg)';
            });
            
            // If it wasn't open, open it and change color
            if (!isOpen) {
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
                
                // Change question text color
                questionText.classList.remove('text-white');
                questionText.classList.add('color-pri');
            }
        });
    });
});

// Testimonials Slider
const reviewSlider = new Swiper('.reviewSlider', {
    slidesPerView: 1,
    spaceBetween: 48,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    
    breakpoints: {
        768: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        }
    }
})

// Logo Swiper:
const logoSwiper = new Swiper('.logoSwiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 100,
    speed: 2000,
    autoplay: {
        delay: 3500,
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 4,
        }
    }
});

// Pricing Section Configuration:
document.addEventListener('DOMContentLoaded', () => {
    const pricingBtns = document.querySelectorAll('.pricingBadge');

    pricingBtns.forEach((pricingBtn) => {
        pricingBtn.addEventListener('click', () => {
            // Reset all buttons
            pricingBtns.forEach((btn) => {
                btn.classList.remove('bg-pri');
                btn.classList.add('bg-blackTwo');
            });

            // Activate clicked button
            pricingBtn.classList.remove('bg-blackTwo');
            pricingBtn.classList.add('bg-pri');

            const tabName = pricingBtn.textContent.trim();

            // Hide all plan types first
            document.querySelectorAll('.basicPlan, .premiumPlan, .ultimatePlan').forEach((plan) => {
                plan.classList.add('d-none');
            });

            // Show plans based on which tab is clicked
            if (tabName === "Platinum package") {
                document.querySelectorAll('.basicPlan').forEach((plan) => {
                    plan.classList.remove('d-none');
                });
            } else if (tabName === "Interior detailing") {
                document.querySelectorAll('.premiumPlan').forEach((plan) => {
                    plan.classList.remove('d-none');
                });
            } else if (tabName === "Delivery & pickup") {
                document.querySelectorAll('.ultimatePlan').forEach((plan) => {
                    plan.classList.remove('d-none');
                });
            }
        });
    });
})