export function ChatArea(): string {
  return `
    <div class="flex-1 flex flex-col">
      <div class="flex-1 overflow-y-auto p-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-8">
            <h1 class="text-2xl font-bold">SpamBot</h1>
            <p class="text-gray-400">How can I help you today?</p>
          </div>
          
          <div id="messages-container" class="space-y-6 mb-32">
            <div class="p-4 bg-gray-800 rounded-lg">
              <div class="font-semibold">You</div>
              <div>Hello, world!</div>
            </div>
            <div class="p-4 bg-gray-800 rounded-lg">
              <div class="font-semibold text-green-400">Assistant</div>
              <div>Hello! How can I assist you today?</div>
            </div>
          </div>
        </div>
      </div>

      <div id="input-area" class="border-t border-gray-700 p-4 sticky bottom-0 bg-gray-900">
        <div class="max-w-3xl mx-auto relative">
          <textarea 
            id="message-input"
            class="w-full bg-gray-800 border border-gray-700 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
            placeholder="Message SpamBot..." 
            rows="1"
          ></textarea>
          <button id="send-btn" class="absolute right-4 bottom-3 bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
        <div class="text-center text-xs text-gray-500 mt-2">
          SpamBot can make mistakes. Consider checking important information.
        </div>
      </div>
    </div>
  `
}