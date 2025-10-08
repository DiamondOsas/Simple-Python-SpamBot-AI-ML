import './style.css'
import { createApp } from './app'

// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  createApp()
})

// Fallback initialization in case DOMContentLoaded has already fired
if (document.readyState === 'loading') {
  // Still loading, DOMContentLoaded will handle initialization
} else {
  // Already loaded, initialize immediately
  createApp()
}