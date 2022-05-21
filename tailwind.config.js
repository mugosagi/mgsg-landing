module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--main-bg-color)',
        fg: 'var(--main-fg-color)',
      },
      fontFamily: {
        plex: ['IBM Plex Mono', 'monospace'],
        space: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
