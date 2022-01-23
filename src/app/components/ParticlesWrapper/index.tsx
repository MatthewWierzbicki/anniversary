import React from 'react'
import Particles from 'react-tsparticles'

export const ParticlesWrapper = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        backgroundMode: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: '#090C08',
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: { enable: true, mode: 'repulse' },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: { enable: false, force: 5, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 0.3,
              opacity: 0.5,
              size: 2,
            },
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 200, duration: 0.8 },
          },
        },
        particles: {
          color: { value: '#E6BEAE' },
          links: {
            color: '#E6BEAE',
            distance: 500,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            direction: 'bottom',
            enable: true,
            outMode: 'out',
            random: false,
            size: true,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 400 },
          opacity: {
            random: true,
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
