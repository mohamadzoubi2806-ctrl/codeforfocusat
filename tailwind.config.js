/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '400' }],
        sm: ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.025em', fontWeight: '400' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
        lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '-0.01em', fontWeight: '400' }],
        xl: ['1.25rem', { lineHeight: '1.75', letterSpacing: '-0.015em', fontWeight: '500' }],
        '2xl': ['1.5rem', { lineHeight: '2', letterSpacing: '-0.02em', fontWeight: '600' }],
        '3xl': ['1.875rem', { lineHeight: '2.25', letterSpacing: '-0.025em', fontWeight: '700' }],
        '4xl': ['2.25rem', { lineHeight: '2.5', letterSpacing: '-0.03em', fontWeight: '700' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '800' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '800' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.045em', fontWeight: '900' }],
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        paragraph: ['Roboto', 'sans-serif'],
      },
      colors: {
        'light-orange': '#FFF4ED',
        destructive: '#FF6B35',
        'destructive-foreground': '#FFFFFF',
        background: '#FFFBF7',
        secondary: '#4A90E2',
        foreground: '#1E293B',
        'secondary-foreground': '#FFFFFF',
        'primary-foreground': '#FFFFFF',
        primary: '#FF6B35',
        accent: '#4A90E2',
        'accent-foreground': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
