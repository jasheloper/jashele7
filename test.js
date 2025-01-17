module.exports = {
    theme: {
      extend: {
        keyframes: {
          gradient: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
        animation: {
          gradient: 'gradient 3s ease infinite',
        },
      },
    },
    // ... other configurations
  };
  