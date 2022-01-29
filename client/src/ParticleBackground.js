import React from "react";
import Particles from "react-tsparticles"
import particlesConfig from "./config/particle-config";

export default function ParticleBackground() {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
    const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fpsLimit: 60,
            interactivity: {
            events: {
                onClick: {
                enable: true,
                mode: "push",
                },
                onHover: {
                enable: false,
                mode: "repulse",
                },
                resize: true,
            },
            modes: {
                bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10,
                },
                push: {
                quantity: 4,
                },
                repulse: {
                distance: 200,
                duration: 0.4,
                },
            },
            },
            particles: {
            color: {
                value: "#000000",
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                enable: true,
                area: 600,
                },
                value: 40,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: true,
                value: 7,
            },
            },
            detectRetina: true,
        }}
        />
    )
}