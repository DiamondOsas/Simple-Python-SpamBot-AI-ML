import { Sidebar } from './Sidebar'
import { ChatArea } from './ChatArea'

export function ChatApp(): string {
  return `
    <div class="flex h-screen bg-gray-900">
      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden fixed top-4 left-4 z-50 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg shadow-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <!-- Sidebar -->
      <div id="sidebar" class="fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-gray-800 to-gray-900 p-4 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out h-full pt-16 border-r border-gray-700">
        ${Sidebar()}
        <button id="close-sidebar" class="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Overlay for mobile -->
      <div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-30 hidden md:hidden"></div>
      
      <!-- Main Chat Area -->
      <div class="flex-1 flex flex-col relative">
        ${ChatArea()}
      </div>
    </div>
  `
}