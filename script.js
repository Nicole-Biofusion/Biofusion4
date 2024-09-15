// Smooth Scroll
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash!== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Hero Section Scroll Down Animation
$(document).ready(function() {
  $('.scroll-down').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 800);
  });
});

// About Section Progress Bar Animation
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= $('#about').offset().top - $(window).height() / 2) {
      $('.progress-bar.progress').animate({
        width: '100%'
      }, 2000);
    }
  });
});

// Features Section Card Hover Effect
$(document).ready(function() {
  $('.features.card').hover(function() {
    $(this).find('.card-content').animate({
      opacity: 1
    }, 200);
  }, function() {
    $(this).find('.card-content').animate({
      opacity: 0.5
    }, 200);
  });
});

// Testimonials Section Slider
$(document).ready(function() {
  var testimonialSlider = $('.testimonial-slider');
  var currentSlide = 0;
  var slides = testimonialSlider.find('.testimonial');
  var slideCount = slides.length;
  var slideWidth = slides.width();
  var slideHeight = slides.height();
  testimonialSlider.css('width', slideCount * slideWidth);
  testimonialSlider.css('height', slideHeight);
  function nextSlide() {
    if (currentSlide < slideCount - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    testimonialSlider.animate({
      left: -currentSlide * slideWidth
    }, 500);
  }
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = slideCount - 1;
    }
    testimonialSlider.animate({
      left: -currentSlide * slideWidth
    }, 500);
  }
  $('.next').on('click', nextSlide);
  $('.prev').on('click', prevSlide);
});

// Call-to-Action Section Button Hover Effect
$(document).ready(function() {
  $('.call-to-action button').hover(function() {
    $(this).animate({
      backgroundColor: #FF7518
    }, 200);
  }, function() {
    $(this).animate({
      backgroundColor: #0E950E
    }, 200);
  });
});

// Footer Social Media Links Hover Effect
$(document).ready(function() {
  $('.footer.social-media a').hover(function() {
    $(this).animate({
      color: #FF7518
    }, 200);
  }, function() {
    $(this).animate({
      color: #0F7C95
    }, 200);
  });
});