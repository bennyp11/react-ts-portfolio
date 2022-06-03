import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Particles.css";

const particlesInit = (main) => {

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  loadFull(main);
};

const LiveBackground = () => {
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
            "speed": 1,
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
              "min": 1,
              "max": 3
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