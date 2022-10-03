// Reveal social buttons on name click
$("#info").click(function() {
  $("#social-button-1").css("opacity", "1");
  $("#social-button-2").css("opacity", "1");
  $("#social-button-3").css("opacity", "1");
  $(".social-links").toggleClass('social-links-observed');
  $("#info span").toggleClass('underlined').toggleClass('selected');
})

window.addEventListener('load', function() {
// Glitch skewing on offest
var t1 = new TimelineMax({repeat: -1,repeatDelay: 3.3})
t1.to(".textglitch1", 0.1, {skewX:900,ease: Power4.easeInOut}).to(".textglitch1", 0.04, {skewX:0,ease: Power4.easeInOut})

var t2 = new TimelineMax({repeat: -1,repeatDelay: 4.3})
t2.to(".textglitch2", 0.15, {skewX:100, ease: Power4.easeInOut})
  .to(".textglitch2", 0.08, {skewY:0.15, ease: Power4.easeInOut})
  .to(".textglitch2", 0.03, {skewX:0,ease: Power4.easeInOut})
  .to(".textglitch2", 0.04, {skewY:0,ease: Power4.easeInOut})

var t3 = new TimelineMax({repeat: -1,repeatDelay: 4.8})
t3.to(".textglitch3", 0.18, {skewX:300,ease: Power4.easeInOut})
  .to(".textglitch3", 0.08, {skewY:0.2,ease: Power4.easeInOut})
  .to(".textglitch3", 0.02, {skewX:0,ease: Power4.easeInOut})
  .to(".textglitch3", 0.01, {skewY:0,ease: Power4.easeInOut})

var t4 = new TimelineMax({repeat: -1,repeatDelay: 5})
t4.to(".snippetglitch", 0.1, {skewX:700,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.04, {skewX:0,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.02, {x:-20})
  .to(".snippetglitch", 0.03, {x:0})
  .add("split", 0)
  .to(".snippetglitch", 0.02, {scaleY:1.1,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.04, {scaleY:1,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.1, {skewX:70,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.04, {skewX:0,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.04, {x:-20})
  .to(".snippetglitch", 0.04, {x:0})
  .add("split", 0)
  .to(".snippetglitch", 0.01, {scaleY:.4,ease: Power4.easeInOut})
  .to(".snippetglitch", 0.0, {scaleY:1,ease: Power4.easeInOut})


var t5 = new TimelineMax({repeat: -1,repeatDelay: 6})
t5.to(".textglitch5", 0.1, {skewX:700,ease: Power4.easeInOut})
  .to(".textglitch5", 0.01, {skewX:0,ease: Power4.easeInOut})
  .to(".textglitch5", 0.02, {x:60})
  .to(".textglitch5", 0.02, {x:0})
  .add("split", 0)
  .to(".textglitch5", 0.02, {scaleY:1.1,ease: Power4.easeInOut})
  .to(".textglitch5", 0.03, {scaleY:1.1,ease: Power4.easeInOut})
  .to(".textglitch5", 0.1, {skewX:70,ease: Power4.easeInOut})
  .to(".textglitch5", 0.03, {skewX:0.1,ease: Power4.easeInOut})
  .to(".textglitch5", 0.03, {x:-20})
  .to(".textglitch5", 0.02, {x:0})
  .add("split", 0)
  .to(".textglitch5", 0.01, {scaleY:.4,ease: Power4.easeInOut})
  .to(".textglitch5", 0.0, {scaleY:1,ease: Power4.easeInOut})

var t6 = new TimelineMax({repeat: -1,repeatDelay: 6})
t6.to(".textglitch6", 0.1, {skewX:500,ease: Power4.easeInOut})
  .to(".textglitch6", 0.03, {skewX:0,ease: Power4.easeInOut})
  .to(".textglitch6", 0.03, {x:-10})
  .to(".textglitch6", 0.05, {x:0})
  .add("split", 0)
  .to(".textglitch6", 0.03, {scaleY:1.1,ease: Power4.easeInOut})
  .to(".textglitch6", 0.02, {scaleY:1.15,ease: Power4.easeInOut})
  .to(".textglitch6", 0.1, {skewX:90,ease: Power4.easeInOut})
  .to(".textglitch6", 0.03, {skewX:0.1,ease: Power4.easeInOut})
  .to(".textglitch6", 0.01, {x:-50})
  .to(".textglitch6", 0.03, {x:0})
  .add("split", 0)
  .to(".textglitch6", 0.015, {scaleY:.4,ease: Power4.easeInOut})
  .to(".textglitch6", 0.0, {scaleY:1,ease: Power4.easeInOut})
});



// Hide scroll down button on scroll
if(window.innerWidth >= 768) {
  $(window).scroll(function() {
    if (window.scrollY > 50) {
      $("#scroll-down").fadeOut(500)
    } else {
      $("#scroll-down").fadeIn(500)
    }
  })
}

// Scroll down to project on scroll down button click
$("#scroll-down").click(function() {
  $("html, body").animate({
    scrollTop: $( $('[data-scroll-target]')).offset().top + 135
  }, 1500, "swing");
});




// Scroll Down Text Scramble
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = "!<$-_$/[]{}—=+*^.?#_"
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ""
      const to = newText[i] || ""
      const start = Math.floor(Math.random() * 120)
      const end = start + Math.floor(Math.random() * 120)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ""
    let complete = 0

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.18) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}


// var el = document.querySelector(".scroll-down")

// if (el) {
//   var fx = new TextScramble(el)
//   var GlitchShuffleDelay = 500;
//   var phrases = ["↓ Scroll Down  "]
//   var counter = 0
//   var next = function() {
//     fx.setText(phrases[counter]).then(function() {
//       setTimeout(next, 10000)
//     })
//     counter = (counter + 1) % phrases.length
//   }

//   setTimeout(next, GlitchShuffleDelay);
// }


var el = document.querySelector(".msg")

if (el) {
  var fx = new TextScramble(el)
  var GlitchShuffleDelay = 200;
  var phrases = ["Think* possible idea; make it happen."]//Make ideas* as potent as possible//
  var counter = 0
  var next = function() {
    fx.setText(phrases[counter]).then(function() {
      setTimeout(next, 10000)
    })
    counter = (counter + 1) % phrases.length
  }

  setTimeout(next, GlitchShuffleDelay);
}



