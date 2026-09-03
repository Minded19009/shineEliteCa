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
                qText.classList.add('text-black');
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
                questionText.classList.remove('text-black');
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

// Before/After Image Comparison Sliders (auto-inits all instances)
document.querySelectorAll('.ba-slider').forEach((slider) => {
    const afterImg = slider.querySelector('.ba-slider-after');
    const handle = slider.querySelector('.ba-slider-handle');
    let isDragging = false;

    function setSliderPosition(percent) {
        percent = Math.max(0, Math.min(100, percent));
        afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
        handle.style.left = `${percent}%`;
    }

    function getPercentFromEvent(e) {
        const rect = slider.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        return (x / rect.width) * 100;
    }

    function startDrag(e) {
        isDragging = true;
        moveHandler(e);
    }

    function moveHandler(e) {
        if (!isDragging) return;
        setSliderPosition(getPercentFromEvent(e));
    }

    function endDrag() {
        isDragging = false;
    }

    // Mouse events
    handle.addEventListener('mousedown', startDrag);
    slider.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', endDrag);

    // Touch events
    handle.addEventListener('touchstart', startDrag, { passive: true });
    slider.addEventListener('touchstart', startDrag, { passive: true });
    window.addEventListener('touchmove', moveHandler, { passive: true });
    window.addEventListener('touchend', endDrag);
});

// Pricing Tabs Configuration:
let servicesSwitcher = document.querySelectorAll('.pricingBadge');
let planSwitcherCon = document.querySelector('.planSwitcherCon');
let planSwitcher = document.querySelectorAll('.planSwitcher');
let pricingPlan = document.querySelectorAll('.pricingPlan');

function showPlan(planClass) {
    pricingPlan.forEach((plan) => {
        plan.classList.add('d-none');
    });

    let selectedPlan = document.querySelectorAll(`.${planClass}`);

    selectedPlan.forEach((plan) => {
        plan.classList.remove('d-none');
    })
}

servicesSwitcher.forEach((switcher) => {
    switcher.addEventListener('click', () => {

        servicesSwitcher.forEach((switcher) => {
            switcher.classList.remove('bg-pri');
            switcher.classList.add('bg-black');
        });

        switcher.classList.remove('bg-black');
        switcher.classList.add('bg-pri');

        let label = switcher.innerText.trim().toLowerCase();

        if (label === 'interior detailing' || label === 'exterior detailing') {

            planSwitcherCon.classList.add('d-flex');
            planSwitcherCon.classList.remove('d-none');

            let selectedPlan = document.querySelector('.planSwitcher.bg-pri');
            let packageLabel = selectedPlan.innerText.trim().toLowerCase();

            if (label === 'interior detailing') {
                if (packageLabel === 'basic package') {
                    showPlan('interiorBasic');
                } else {
                    showPlan('interiorPlatinum');
                }
            }

            if (label === 'exterior detailing') {
                if (packageLabel === 'basic package') {
                    showPlan('exteriorBasic');
                } else {
                    showPlan('exteriorPlatinum');
                }
            }

        }

        else if (label === 'complete detailing') {

            planSwitcherCon.classList.add('d-none');
            planSwitcherCon.classList.remove('d-flex');

            showPlan('completeDetailing');
        }

        else if (label === 'add-ons') {

            planSwitcherCon.classList.add('d-none');
            planSwitcherCon.classList.remove('d-flex');

            showPlan('addOns');
        }
    });
});


planSwitcher.forEach((switcher) => {
    switcher.addEventListener('click', () => {

        planSwitcher.forEach((switcher) => {
            switcher.classList.remove('bg-pri');
            switcher.classList.add('bg-black');
        });

        switcher.classList.remove('bg-blackTwo');
        switcher.classList.add('bg-pri');

        let selectedService = document.querySelector('.pricingBadge.bg-pri');
        let serviceLabel = selectedService.innerText.trim().toLowerCase();

        let packageLabel = switcher.innerText.trim().toLowerCase();

        if (serviceLabel === 'interior detailing' &&
            packageLabel === 'basic package') {

            showPlan('interiorBasic');
        }

        else if (serviceLabel === 'interior detailing' &&
            packageLabel === 'platinum package') {

            showPlan('interiorPlatinum');
        }

        else if (serviceLabel === 'exterior detailing' &&
            packageLabel === 'basic package') {

            showPlan('exteriorBasic');
        }

        else if (serviceLabel === 'exterior detailing' &&
            packageLabel === 'platinum package') {

            showPlan('exteriorPlatinum');
        }
    });
});


showPlan('interiorBasic');

// Services Swiper:
const servicesSwiper = new Swiper('.servicesSwiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    
    breakpoints: {
        650: {
            slidesPerView: 2,
        }
     }
});

const navbar = document.getElementById('navbar');
const navbarSpacer = document.querySelector('.navbar-spacer');

window.addEventListener('scroll', () => {
    if (window.scrollY > 110) {
        navbar.classList.add('navbar-fixed');
        navbarSpacer.style.display = 'block';
    } else {
        navbar.classList.remove('navbar-fixed');
        navbarSpacer.style.display = 'none';
    }
});