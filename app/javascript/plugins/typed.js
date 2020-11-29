import Typed from 'typed.js';

const initTyped = () => {
    var options = {
    strings: ['powered.', 'pathic.', 'ilie.'],
    typeSpeed: 80,
    loop: true,
    loopCount: Infinity,
    startDelay: 50,
    backSpeed: 80,
  };

  var typed = new Typed('#typed', options);
}

export { initTyped };
