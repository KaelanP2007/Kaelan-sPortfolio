(() => {
  const button = document.querySelector('.replay-wave');
  const arm = document.querySelector('.avatar-character .wave-arm');
  if (!button || !arm) return;

  let replay;
  button.addEventListener('click', () => {
    // Restart the hand itself. Toggling the wrapper class did not reliably
    // restart the already-finished CSS animation on its SVG child.
    for (const animation of arm.getAnimations()) animation.cancel();
    arm.style.animation = 'none';
    arm.style.rotate = 'none';
    replay = arm.animate([
      { transform: 'rotate(0deg)', offset: 0 },
      { transform: 'rotate(6deg)', offset: 0.2 },
      { transform: 'rotate(-5deg)', offset: 0.4 },
      { transform: 'rotate(6deg)', offset: 0.6 },
      { transform: 'rotate(-5deg)', offset: 0.8 },
      { transform: 'rotate(0deg)', offset: 1 }
    ], { duration: 1500, iterations: 2, easing: 'ease-in-out' });
    // This brief greeting is explicitly requested by the button, so it can
    // replay even when automatic page motion is paused or reduced.
  });

  document.addEventListener('portfolio:motionchange', event => {
    if (event.detail.paused) replay?.cancel();
  });
})();
