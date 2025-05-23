import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize theme before rendering
const initTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Initialize theme immediately to prevent flash
initTheme();

createRoot(document.getElementById("root")!).render(<App />);
