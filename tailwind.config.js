/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode OLED color palette from UI/UX Pro Max
        'dark-bg': '#0a0e27',
        'dark-card': '#12182d',
        'dark-surface': '#1a2138',
        // Professional blue tones with better contrast
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          // Accent blues for UI elements
          'accent': '#0080ff',
          'electric': '#00ffff',
        },
        // Enhanced gray scale for better readability
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Success and accent colors
        green: {
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        // Tech Startup font pairing from UI/UX Pro Max
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['DM Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      // Enhanced typography scale
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      // Smooth transitions and animations
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      // Glassmorphism effects
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
    },
  },
  plugins: [],
}