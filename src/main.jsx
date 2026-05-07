import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
if ('Notification' in window) {
  Notification.requestPermission();
}
createRoot(document.getElementById('root')).render(<App />)
