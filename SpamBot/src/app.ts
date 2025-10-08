import { ChatApp } from './components/ChatApp'

export function createApp() {
  const app = document.getElementById('app')
  if (app) {
    app.innerHTML = ChatApp()
  }
}