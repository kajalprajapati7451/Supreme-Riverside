  $(document).ready(function() {
            // Navbar scroll effect
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('.navbar').addClass('scrolled');
                } else {
                    $('.navbar').removeClass('scrolled');
                }
                
                // Show/hide back to top button
                if ($(this).scrollTop() > 300) {
                    $('#backToTop').addClass('show');
                } else {
                    $('#backToTop').removeClass('show');
                }
            });
            
            // Smooth scrolling for navigation links
            $('a.nav-link').on('click', function(e) {
                if (this.hash !== "") {
                    e.preventDefault();
                    const hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 70
                    }, 800);
                    
                    // Close navbar on mobile after click
                    $('.navbar-collapse').collapse('hide');
                }
            });
            
            // Smooth scroll to top
            $('#backToTop').click(function() {
                $('html, body').animate({scrollTop: 0}, 800);
                return false;
            });
            
            // Form submission
            $('#interestForm').submit(function(e) {
                e.preventDefault();
                alert('Thank you for your interest! We will contact you soon with more details about Supreme Riverside.');
                this.reset();
            });
            
            // Counter animation
            function animateCounter() {
                $('.counter-number').each(function() {
                    const $this = $(this);
                    const countTo = $this.attr('data-count');
                    
                    $({ countNum: 0 }).animate({
                        countNum: countTo
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                });
            }
            
            // Initialize counter when in viewport
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            let counterAnimated = false;
            
            function checkCounter() {
                if (!counterAnimated && isElementInViewport(document.querySelector('.counter-section'))) {
                    animateCounter();
                    counterAnimated = true;
                }
            }
            
            $(window).on('scroll', checkCounter);
            checkCounter(); // Check on page load
        });
         (function() {
    // If you have an existing floating WhatsApp button, ensure it doesn't overlap
    // This adds extra bottom margin to the floating buttons when mobile bar is visible
    function adjustFloatingButtons() {
      if (window.innerWidth <= 768) {
        var fltWa = document.querySelector('.flt-wa');
        var sttBtn = document.querySelector('.stt-btn');
        if (fltWa) fltWa.style.bottom = '80px';
        if (sttBtn) sttBtn.style.bottom = '140px';
      } else {
        var fltWa = document.querySelector('.flt-wa');
        var sttBtn = document.querySelector('.stt-btn');
        if (fltWa) fltWa.style.bottom = '26px';
        if (sttBtn) sttBtn.style.bottom = '90px';
      }
    }
    window.addEventListener('load', adjustFloatingButtons);
    window.addEventListener('resize', adjustFloatingButtons);
    adjustFloatingButtons();
  })();