export const ParticlesConfig = {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: '#f61e3f',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 3,
          color: '#f61e3f',
        },
        polygon: {
          nb_sides: 5
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 0.8,
          opacity_min: 0.25,
          sync: false
        }
      },
      size: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 1.25,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#000000',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: true,
          rotateX: 2000,
          rotateY: 2000
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: false,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 3
          }
        },
        repulse: {
          distance: 200,
          duration: 2
        }
      }
    },
    retina_detect: true
 };