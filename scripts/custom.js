if (window.innerWidth > 1080) {
  particlesJS("blue-dots", {
    "particles": {
      "number": {
        "value": 12,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1b1e34"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 4,
          "color": "#54cbed"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 90,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 40,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 0,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 0,
          "duration": 0
        },
        "push": {
          "particles_nb": 0
        },
        "remove": {
          "particles_nb": 10
        }
      }
    },
    "retina_detect": true
  });
  var count_particles, stats, update;
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}