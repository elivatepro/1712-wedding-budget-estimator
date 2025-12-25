/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0a0a0a',
          bgSecondary: '#1a1a1a',
        },
        accent: {
          gold: '#d4a574',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0a0',
        },
        // Theme-specific colors for wedding styles
        intimate: {
          primary: '#f5e6e8',
          secondary: '#8b9a8c',
          accent: '#d4a5a5',
        },
        classic: {
          primary: '#f5f5dc',
          secondary: '#1e3a5f',
          accent: '#d4a574',
        },
        modern: {
          primary: '#000000',
          secondary: '#ffffff',
          accent: '#666666',
        },
        bohemian: {
          primary: '#e07a5f',
          secondary: '#81894f',
          accent: '#c9a66b',
        },
        luxury: {
          primary: '#0a0a0a',
          secondary: '#d4a574',
          accent: '#f5f5dc',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
