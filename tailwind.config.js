// ... in tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      // ... keyframes and animation definition ...
      
      // Ensure these custom delays are present for staggering
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        // ... all the way up to 700ms or 1000ms
        '300': '300ms',
        '600': '600ms', 
        // ...
      }
    },
  },
  plugins: [],
};