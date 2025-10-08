import { ChatApp } from './components/ChatApp'

export function createApp() {
  const app = document.getElementById('app')
  if (app) {
    app.innerHTML = ChatApp()
    
    // Add event listeners after DOM is rendered
    setTimeout(() => {
      const sendBtn = document.getElementById('send-btn')
      const messageInput = document.getElementById('message-input') as HTMLTextAreaElement
      
      if (sendBtn && messageInput) {
        sendBtn.addEventListener('click', sendMessage)
        messageInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
          }
        })
      }
      
      // Add new chat button functionality
      const newChatBtn = document.getElementById('new-chat-btn')
      if (newChatBtn) {
        newChatBtn.addEventListener('click', () => {
          const messagesContainer = document.getElementById('messages-container')
          if (messagesContainer) {
            messagesContainer.innerHTML = ''
          }
          if (messageInput) {
            messageInput.value = ''
            messageInput.focus()
          }
        })
      }
    }, 0)
  }
}

function sendMessage() {
  const messageInput = document.getElementById('message-input') as HTMLTextAreaElement
  const messagesContainer = document.getElementById('messages-container')
  
  if (!messageInput || !messagesContainer) return
  
  const message = messageInput.value.trim()
  if (!message) return
  
  // Add user message
  const userMessageDiv = document.createElement('div')
  userMessageDiv.className = 'p-4 bg-gray-800 rounded-lg mb-4'
  userMessageDiv.innerHTML = `
    <div class="font-semibold">You</div>
    <div>${message}</div>
  `
  messagesContainer.appendChild(userMessageDiv)
  
  // Clear input
  messageInput.value = ''
  
  // Auto-resize textarea
  messageInput.style.height = 'auto'
  
  // Scroll to bottom
  messagesContainer.parentElement?.scrollTo({
    top: messagesContainer.parentElement.scrollHeight,
    behavior: 'smooth'
  })
  
  // Simulate bot response after a delay
  setTimeout(() => {
    const botMessageDiv = document.createElement('div')
    botMessageDiv.className = 'p-4 bg-gray-800 rounded-lg'
    botMessageDiv.innerHTML = `
      <div class="font-semibold text-green-400">Assistant</div>
      <div>This is a simulated response to: "${message}". In a real implementation, this would connect to an AI service.</div>
    `
    messagesContainer.appendChild(botMessageDiv)
    
    // Scroll to bottom again after bot response
    messagesContainer.parentElement?.scrollTo({
      top: messagesContainer.parentElement.scrollHeight,
      behavior: 'smooth'
    })
  }, 1000)
}