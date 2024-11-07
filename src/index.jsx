import { createRoot } from 'react-dom/client';
import App from '@compo/App.jsx';
import '@styl/global.css';

for (let i = 3; i < 9; i++) fetch(`/avatars/${i}.webp`);

createRoot(document.querySelector('.root-container')).render(<App />);
