import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from 'tsparticles-engine'
import "./Particles.css";

function LiveBackground(){

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        "background": {
          "color": {
            "value": "#232741"
          },
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "20%"
        },
        "fullScreen": {
          "zIndex": 1
        },
        "interactivity": {
          "events": {
            "onClick": {
              "enable": true,
              "mode": "repulse"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble"
            }
          },
          "modes": {
            "bubble": {
              "distance": 250,
              "duration": 2,
              "opacity": 0,
              "size": 0,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "selectors": []
              }
            },
            "grab": {
              "distance": 400
            },
            "repulse": {
              "distance": 400,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": []
              }
            }
          }
        },
        "particles": {
          "color": {
            "value": "#ffffff"
          },
          "links": {
            "color": {
              "value": "#ffffff"
            },
            "distance": 150,
            "opacity": 0.4
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 600
              }
            },
            "enable": true,
            "path": {},
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": true,
            "speed": .11,
            "spin": {}
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 160
          },
          "opacity": {
            "random": {
              "enable": true
            },
            "value": {
              "min": 0,
              "max": 1
            },
            "animation": {
              "enable": true,
              "speed": 1,
              "minimumValue": 0
            }
          },
          "size": {
            "random": {
              "enable": true
            },
            "value": {
              "min": .5,
              "max": 1.5
            },
            "animation": {
              "speed": 4,
              "minimumValue": 0.3
            }
          }
        }
      }}
    />
  );
};

export default LiveBackground;