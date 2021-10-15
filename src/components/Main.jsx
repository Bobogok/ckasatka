import React from 'react';
import Particles from 'react-particles-js';
import Button from './Button';

function Main() {
  return (
    <section className="main">
      <div className="main__bg">
        <Particles
          params={{
            particles: {
              number: {
                value: 19,
                density: {
                  enable: true,
                  value_area: 394.57382081613633
                }
              },
              color: {
                value: '#dc143c'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#dc143c'
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: 'img/github.svg',
                  width: 5,
                  height: 5
                }
              },
              opacity: {
                value: 0.6413648243462091,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 48.7246327380807,
                  size_min: 1.6241544246026904,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#dc143c',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 1200,
                  rotateY: 1200
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
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>
      <div className="main__container container">
        <h1 className="main__title">
          №1 В РОССИИ IT CИСТЕМА <br className="main__br" /> ИНСТРУМЕНТОВ ДЛЯ E&#8209;COMMERCE
          <br className="main__br" /> УПРАВЛЕНИЯ
        </h1>
        <p className="main__text">Мы делаем автоматизацию вашего бизнеса на собственных IT продуктах.</p>
        <Button className="main__button" fill shadow>
          <span>Подключить</span>
        </Button>
      </div>
    </section>
  );
}

export default Main;
