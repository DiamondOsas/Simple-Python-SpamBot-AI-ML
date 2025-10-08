export function ChatArea(): string {
  return `
    <div class="flex-1 flex flex-col">
      <div class="flex-1 overflow-y-auto p-4 md:p-6">
        <div class="max-w-3xl mx-auto w-full">
          <div class="text-center mb-8 md:mb-12">
            <div class="inline-flex items-center gap-2 mb-3">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h1 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SpamBot</h1>
            </div>
            <p class="text-gray-400 text-sm md:text-base">AI-powered spam detection tool</p>
          </div>
          
          <div id="messages-container" class="space-y-4 md:space-y-6 mb-20 md:mb-32">
            <div class="flex justify-center">
              <div class="max-w-lg w-full text-center">
                <div class="mb-6">
                  <div class="inline-block p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm border border-gray-700">
                    <h2 class="text-xl font-semibold text-white mb-3 animate-pulse">Test if text is spam or not</h2>
                    <p class="text-gray-300 mb-4">Enter any message, email, or text content in the input box below to analyze if it's legitimate or potentially spam.</p>
                    <div class="flex justify-center">
                      <div class="animate-bounce inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 class="font-medium text-gray-300 mb-3">How it works:</h3>
                  <ul class="space-y-2 text-left text-gray-400">
                    <li class="flex items-start gap-2">
                      <span class="text-green-400 mt-1">•</span>
                      <span>Type or paste your message in the input box below</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-green-400 mt-1">•</span>
                      <span>Click the send button or press Enter</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-green-400 mt-1">•</span>
                      <span>Our AI will analyze and tell you if it's spam or legitimate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="input-area" class="border-t border-gray-700 p-4 md:p-6 bg-gradient-to-b from-gray-900 to-black">
        <div class="max-w-3xl mx-auto w-full relative">
          <textarea
            id="message-input"
            class="w-full bg-gray-800 border border-gray-700 rounded-xl pl-4 pr-14 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
            placeholder="Paste a message or text to check if it's spam..."
            rows="1"
          ></textarea>
          <button id="send-btn" class="absolute right-3 md:right-4 bottom-3 md:bottom-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 md:w-5 md:h-5 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
        <div class="text-center text-xs text-gray-500 mt-3 md:mt-4">
          <span class="inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Our AI analyzes content, patterns, and suspicious elements to detect spam.
          </span>
        </div>
      </div>
    </div>
  `
}