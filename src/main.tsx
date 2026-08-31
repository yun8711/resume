import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import { resume } from './data/resume';
import App from './App';
import './index.css';

document.title = `${resume.name} · Resume`;

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
