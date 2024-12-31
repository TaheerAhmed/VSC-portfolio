/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vscode: {
          'bg': '#1e1e1e',
          'sidebar': '#252526',
          'border': '#333333',
          'text': '#cccccc',
          'hover': '#37373d',
          'active': '#37373d',
          'blue': '#007acc'
        }
      }
    }
  },
  plugins: [],
}