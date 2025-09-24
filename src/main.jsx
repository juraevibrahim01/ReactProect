import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from './router/Provider';

createRoot(document.getElementById('root')).render(<Provider/>) 