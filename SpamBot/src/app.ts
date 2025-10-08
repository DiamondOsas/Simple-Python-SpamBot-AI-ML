import { ChatApp } from './components/ChatApp'

export function createApp() {
  const app = document.getElementById('app')
  if (app) {
    app.innerHTML = ChatApp()
    
    // Add event listeners after DOM is rendered
    setTimeout(() => {
      console.log('Initializing app and attaching event listeners...')
      
      const sendBtn = document.getElementById('send-btn')
      const messageInput = document.getElementById('message-input') as HTMLTextAreaElement
      const mobileMenuBtn = document.getElementById('mobile-menu-btn')
      const closeSidebar = document.getElementById('close-sidebar')
      const sidebar = document.getElementById('sidebar')
      const sidebarOverlay = document.getElementById('sidebar-overlay')
      const newChatBtn = document.getElementById('new-chat-btn')
      
      console.log('DOM Elements found:', {
        mobileMenuBtn: !!mobileMenuBtn,
        closeSidebar: !!closeSidebar,
        sidebar: !!sidebar,
        sidebarOverlay: !!sidebarOverlay,
        newChatBtn: !!newChatBtn
      })
      
      // Cache DOM elements for better performance
      const messagesContainer = document.getElementById('messages-container')
      const messagesParent = messagesContainer?.parentElement
      
      // Mobile menu functionality
      const toggleSidebar = () => {
        console.log('toggleSidebar called, current state:', {
          sidebar: !!sidebar,
          sidebarOverlay: !!sidebarOverlay,
          sidebarHidden: sidebar?.classList.contains('-translate-x-full')
        })
        
        if (sidebar && sidebarOverlay) {
          const isHidden = sidebar.classList.contains('-translate-x-full')
          console.log('Sidebar is currently:', isHidden ? 'hidden' : 'visible')
          
          if (isHidden) {
            console.log('Showing sidebar...')
            sidebar.classList.remove('-translate-x-full')
            sidebarOverlay.classList.remove('hidden')
            sidebarOverlay.classList.add('active')
          } else {
            console.log('Hiding sidebar...')
            sidebar.classList.add('-translate-x-full')
            sidebarOverlay.classList.add('hidden')
            sidebarOverlay.classList.remove('active')
          }
        } else {
          console.error('Cannot toggle sidebar - elements not found')
        }
      }
      
      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
          console.log('Mobile menu button clicked')
          toggleSidebar()
        })
        console.log('Mobile menu event listener attached')
      } else {
        console.error('Mobile menu button not found!')
      }
      
      if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
          console.log('Close sidebar button clicked')
          toggleSidebar()
        })
        console.log('Close sidebar event listener attached')
      } else {
        console.error('Close sidebar button not found!')
      }
      
      if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
          console.log('Sidebar overlay clicked')
          toggleSidebar()
        })
        console.log('Sidebar overlay event listener attached')
      } else {
        console.error('Sidebar overlay not found!')
      }
      
      // Send message functionality
      const sendMessage = () => {
        if (!messageInput || !messagesContainer) return
        
        const message = messageInput.value.trim()
        if (!message) return
        
        // Create user message element
        const userMessageDiv = document.createElement('div')
        userMessageDiv.className = 'flex items-start gap-3 animate-fade-in'
        userMessageDiv.innerHTML = `
          <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-white text-sm font-medium">Y</span>
          </div>
          <div class="flex-1">
            <div class="text-sm text-gray-400 mb-1">You</div>
            <div class="p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg">
              <div>${escapeHtml(message)}</div>
            </div>
          </div>
        `
        
        messagesContainer.appendChild(userMessageDiv)
        
        // Clear input and reset
        messageInput.value = ''
        messageInput.style.height = 'auto'
        messageInput.focus()
        
        // Scroll to bottom
        if (messagesParent) {
          messagesParent.scrollTo({
            top: messagesParent.scrollHeight,
            behavior: 'smooth'
          })
        }
        
        // Simulate bot response with typing indicator
        if (messagesContainer) {
          const typingIndicator = document.createElement('div')
          typingIndicator.className = 'flex items-start gap-3'
          typingIndicator.innerHTML = `
            <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-sm text-green-400 mb-1">Assistant</div>
              <div class="p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg">
                <div class="flex gap-1">
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
              </div>
            </div>
          `
          messagesContainer.appendChild(typingIndicator)
          
          // Scroll to show typing indicator
          if (messagesParent) {
            messagesParent.scrollTo({
              top: messagesParent.scrollHeight,
              behavior: 'smooth'
            })
          }
          
          // Simulate bot response after delay
          setTimeout(() => {
            if (typingIndicator.parentNode) {
              typingIndicator.remove()
            }
            
            const botMessageDiv = document.createElement('div')
            botMessageDiv.className = 'flex items-start gap-3 animate-fade-in'
            botMessageDiv.innerHTML = `
              <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-sm text-green-400 mb-1">Assistant</div>
                <div class="p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg">
                  <div>This is a simulated response to: "${message}". In a real implementation, this would connect to an AI service.</div>
                </div>
              </div>
            `
            
            messagesContainer.appendChild(botMessageDiv)
            
            // Scroll to bottom after bot response
            if (messagesParent) {
              messagesParent.scrollTo({
                top: messagesParent.scrollHeight,
                behavior: 'smooth'
              })
            }
          }, 1500)
        }
      }
      
      // Event listeners
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
      if (newChatBtn && messagesContainer && messageInput) {
        newChatBtn.addEventListener('click', () => {
          messagesContainer.innerHTML = ''
          messageInput.value = ''
          messageInput.focus()
          
          // Close sidebar on mobile after new chat
          if (window.innerWidth < 768) {
            toggleSidebar()
          }
        })
      }
      
      // Add click event listeners to sidebar items
      const sidebarItems = document.querySelectorAll('#sidebar .space-y-2 > div')
      console.log('Found sidebar items:', sidebarItems.length)
      
      sidebarItems.forEach((item, index) => {
        item.addEventListener('click', () => {
          console.log(`Sidebar item ${index + 1} clicked`)
          
          // Remove active class from all items
          sidebarItems.forEach(i => {
            i.classList.remove('bg-gray-700')
            const dot = i.querySelector('.w-2.h-2')
            const text = i.querySelector('span')
            if (dot) {
              dot.classList.remove('bg-blue-500')
              dot.classList.add('bg-gray-500')
            }
            if (text) {
              text.classList.remove('text-gray-200')
              text.classList.add('text-gray-400')
            }
          })
          
          // Add active class to clicked item
          item.classList.add('bg-gray-700')
          const dot = item.querySelector('.w-2.h-2')
          const text = item.querySelector('span')
          if (dot) {
            dot.classList.remove('bg-gray-500')
            dot.classList.add('bg-blue-500')
          }
          if (text) {
            text.classList.remove('text-gray-400')
            text.classList.add('text-gray-200')
          }
          
          // Close sidebar on mobile after selection
          if (window.innerWidth < 768) {
            console.log('Closing sidebar on mobile after selection')
            toggleSidebar()
          }
          
          // Here you could add functionality to load different chat content
          // based on which sidebar item was clicked
        })
      })
      
      // Auto-resize textarea
      const autoResize = () => {
        if (messageInput) {
          messageInput.style.height = 'auto'
          messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px'
        }
      }
      
      if (messageInput) {
        messageInput.addEventListener('input', autoResize)
      }
    }, 0)
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}