(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function k(){return`
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
  `}function L(){return`
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
  `}function M(){return`
    <div class="flex h-screen bg-gray-900">
      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden fixed top-4 left-4 z-50 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg shadow-lg transition-colors duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <!-- Sidebar -->
      <div id="sidebar" class="fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-gray-800 to-gray-900 p-4 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out h-full pt-16 border-r border-gray-700">
        ${k()}
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
        ${L()}
      </div>
    </div>
  `}function w(){const u=document.getElementById("app");u&&(u.innerHTML=M(),setTimeout(()=>{console.log("Initializing app and attaching event listeners...");const i=document.getElementById("send-btn"),s=document.getElementById("message-input"),c=document.getElementById("mobile-menu-btn"),t=document.getElementById("close-sidebar"),e=document.getElementById("sidebar"),r=document.getElementById("sidebar-overlay"),v=document.getElementById("new-chat-btn");console.log("DOM Elements found:",{mobileMenuBtn:!!c,closeSidebar:!!t,sidebar:!!e,sidebarOverlay:!!r,newChatBtn:!!v});const n=document.getElementById("messages-container"),l=n==null?void 0:n.parentElement,g=()=>{if(console.log("toggleSidebar called, current state:",{sidebar:!!e,sidebarOverlay:!!r,sidebarHidden:e==null?void 0:e.classList.contains("-translate-x-full")}),e&&r){const o=e.classList.contains("-translate-x-full");console.log("Sidebar is currently:",o?"hidden":"visible"),o?(console.log("Showing sidebar..."),e.classList.remove("-translate-x-full"),r.classList.remove("hidden"),r.classList.add("active")):(console.log("Hiding sidebar..."),e.classList.add("-translate-x-full"),r.classList.add("hidden"),r.classList.remove("active"))}else console.error("Cannot toggle sidebar - elements not found")};c?(c.addEventListener("click",()=>{console.log("Mobile menu button clicked"),g()}),console.log("Mobile menu event listener attached")):console.error("Mobile menu button not found!"),t?(t.addEventListener("click",()=>{console.log("Close sidebar button clicked"),g()}),console.log("Close sidebar event listener attached")):console.error("Close sidebar button not found!"),r?(r.addEventListener("click",()=>{console.log("Sidebar overlay clicked"),g()}),console.log("Sidebar overlay event listener attached")):console.error("Sidebar overlay not found!");const x=()=>{if(!s||!n)return;const o=s.value.trim();if(!o)return;const m=document.createElement("div");if(m.className="flex items-start gap-3 animate-fade-in",m.innerHTML=`
          <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-white text-sm font-medium">Y</span>
          </div>
          <div class="flex-1">
            <div class="text-sm text-gray-400 mb-1">You</div>
            <div class="p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg">
              <div>${E(o)}</div>
            </div>
          </div>
        `,n.appendChild(m),s.value="",s.style.height="auto",s.focus(),l&&l.scrollTo({top:l.scrollHeight,behavior:"smooth"}),n){const a=document.createElement("div");a.className="flex items-start gap-3",a.innerHTML=`
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
          `,n.appendChild(a),l&&l.scrollTo({top:l.scrollHeight,behavior:"smooth"}),setTimeout(()=>{a.parentNode&&a.remove();const d=document.createElement("div");d.className="flex items-start gap-3 animate-fade-in",d.innerHTML=`
              <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-sm text-green-400 mb-1">Assistant</div>
                <div class="p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg">
                  <div>This is a simulated response to: "${o}". In a real implementation, this would connect to an AI service.</div>
                </div>
              </div>
            `,n.appendChild(d),l&&l.scrollTo({top:l.scrollHeight,behavior:"smooth"})},1500)}};i&&s&&(i.addEventListener("click",x),s.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),x())})),v&&n&&s&&v.addEventListener("click",()=>{n.innerHTML="",s.value="",s.focus(),window.innerWidth<768&&g()});const f=document.querySelectorAll("#sidebar .space-y-2 > div");console.log("Found sidebar items:",f.length),f.forEach((o,m)=>{o.addEventListener("click",()=>{console.log(`Sidebar item ${m+1} clicked`),f.forEach(p=>{p.classList.remove("bg-gray-700");const b=p.querySelector(".w-2.h-2"),h=p.querySelector("span");b&&(b.classList.remove("bg-blue-500"),b.classList.add("bg-gray-500")),h&&(h.classList.remove("text-gray-200"),h.classList.add("text-gray-400"))}),o.classList.add("bg-gray-700");const a=o.querySelector(".w-2.h-2"),d=o.querySelector("span");a&&(a.classList.remove("bg-gray-500"),a.classList.add("bg-blue-500")),d&&(d.classList.remove("text-gray-400"),d.classList.add("text-gray-200")),window.innerWidth<768&&(console.log("Closing sidebar on mobile after selection"),g())})});const y=()=>{s&&(s.style.height="auto",s.style.height=Math.min(s.scrollHeight,120)+"px")};s&&s.addEventListener("input",y)},0))}function E(u){const i=document.createElement("div");return i.textContent=u,i.innerHTML}document.addEventListener("DOMContentLoaded",()=>{w()});document.readyState==="loading"||w();
