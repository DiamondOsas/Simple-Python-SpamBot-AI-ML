export function Sidebar(): string {
  return `
    <div class="w-64 bg-gray-800 p-4 hidden md:block">
      <button id="new-chat-btn" class="w-full bg-gray-700 hover:bg-gray-600 text-left p-3 rounded mb-4">
        + New Chat
      </button>
      <div class="text-gray-400 text-sm mt-6">Today</div>
      <div class="mt-2">
        <div class="p-3 hover:bg-gray-700 rounded cursor-pointer">Chat 1</div>
        <div class="p-3 hover:bg-gray-700 rounded cursor-pointer">Chat 2</div>
      </div>
    </div>
  `
}