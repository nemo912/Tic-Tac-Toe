import { createRoot } from 'react-dom/client';
import App from '@compo/App.jsx';
import '@styl/global.css';

createRoot(document.querySelector('.root-container')).render(<App />);
