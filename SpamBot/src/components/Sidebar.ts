export function Sidebar(): string {
  return `
    <div class="h-full flex flex-col">
      <button id="new-chat-btn" class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-lg mb-6 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        New Chat
      </button>
      <div class="text-gray-400 text-sm font-medium mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Today
      </div>
      <div class="space-y-2 flex-1 overflow-y-auto">
        <div class="p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200 flex items-center gap-3 bg-gray-700">
          <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span class="text-gray-200">Spam Detection</span>
        </div>
        <div class="p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200 flex items-center gap-3">
          <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
          <span class="text-gray-400">Message Analysis</span>
        </div>
        <div class="p-3 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-200 flex items-center gap-3">
          <div class="w-2 h-2 bg-gray-500 rounded-full"></div>
          <span class="text-gray-400">Security Check</span>
        </div>
      </div>
    </div>
  `
}