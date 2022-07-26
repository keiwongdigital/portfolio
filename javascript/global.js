window.addEventListener('load', function() {
  if (('IntersectionObserver' in window)) {
    new Viewport();
  }
});


if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  window.onpageshow = function(event) {
    if (event.persisted) {
        $('body').css({ display: 'flex' });
    }
  };
}

var video = document.getElementById('video');
  if(video){
    video.addEventListener('click',function(){
    video.play();
    },
    false);
  }
  /* parallax-4 Player ref > https://stackoverflow.com/questions/5278262/click-the-poster-image-the-html5-video-plays */


class Viewport {
  constructor(opts) {

    this.observer = new IntersectionObserver(this.cb.bind(this), {
      threshold: [0.05, 0.25, 0.5, 0.75, 1.0]
    })

    this.lazyObserver = new IntersectionObserver(this.preload.bind(this), {
      rootMargin: '500px 0px',
      threshold: [0.1, 0.25, 0.5, 0.75, 1.0]
    })

    this.lazies = Array.from(document.querySelectorAll('.lazy'))
    this.observables = Array.from(document.querySelectorAll('.observable'))

    this.init()
  }

  init() {
    this.observables.map(observable => {
      this.observer.observe(observable)
    })

    this.lazies.map(observable => {
      this.lazyObserver.observe(observable)
    })
  }

  preload(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        let target = entry.target
        target.setAttribute('src', target.getAttribute('data-src'))
        this.lazyObserver.unobserve(target)
      }
    })
  }

  
  cb(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) { 
        this.observe(entry.target, entry.intersectionRatio)
      }
    })
  }

  observe(target, ratio) {
    if (target.classList.contains('observable') && !target.classList.contains('observed')) {
      target.classList.add('observed');
    }


    if (target.nodeName === 'VIDEO') {
      ratio <= 0.25 && !target.paused ? target.pause() : target.play()
    }
  }
}


//ScrollMagic has some crash jquery.magnific-popup.js
/*

function checkScroll() {
  $('#back-to-top').css('opacity', window.scrollY > 720 ? 1 : 0)
}

// Document.Ready
$(function() {
  checkScroll()

  if(window.innerWidth >= 768) {

    // --- Parallax ---
    var controller = new ScrollMagic.Controller();

    $('.parallax-1').each(function(){
        var tween = new TimelineMax();

        tween.from($(this), 1, {y: '10%', ease: Power0.easeNone});

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '150%',
        }).setTween(tween).addTo(controller);
    });


    $('.parallax-2').each(function(){
        var tween = new TimelineMax();

        tween.from($(this), 1, {y: '-25%', ease: Power0.easeNone});

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '150%',
        }).setTween(tween).addTo(controller);
    });

        $('.parallax-3').each(function(){
        var tween = new TimelineMax();

        tween.from($(this), 1, {y: '25%', ease: Power0.easeNone});

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: '150%',
        }).setTween(tween).addTo(controller);
    });
  }

  $(window).scroll(checkScroll);

  $('#back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: '0'
    }, 1250, 'swing');
  });

  $('a').click(function(event) {
    event.preventDefault();
    newLocation = this.href;

    //Some crash jquery.magnific-popup.js
    $('body').fadeOut(500, function() {
      window.location = newLocation;
    });
  });

});
*/





