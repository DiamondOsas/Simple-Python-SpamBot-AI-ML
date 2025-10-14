  const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const welcomeScreen = document.getElementById('welcome-screen');
const newChatButton = document.getElementById('new-chat-button');
const sidebar = document.getElementById('sidebar');
const openSidebarButton = document.getElementById('open-sidebar-button');
const closeSidebarButton = document.getElementById('close-sidebar-button');

const createChatMessageElement = (message, isUser) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('p-4', 'text-white', isUser ? 'bg-[#343541]' : 'bg-[#444654]');

  const messageElement = document.createElement('div');
  messageElement.classList.add('flex', 'items-start', 'gap-4', 'max-w-3xl', 'mx-auto');

  const avatar = document.createElement('div');
  avatar.classList.add('w-8', 'h-8', 'rounded-sm', 'flex', 'items-center', 'justify-center', 'font-bold', 'text-sm');
  avatar.textContent = isUser ? 'U' : 'S';
  avatar.classList.add(isUser ? 'bg-indigo-600' : 'bg-emerald-600');

  const messageContent = document.createElement('div');
  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = message;
  messageContent.appendChild(messageParagraph);

  messageElement.appendChild(avatar);
  messageElement.appendChild(messageContent);

  wrapper.appendChild(messageElement);
  return wrapper;
};

const addMessageToChat = (message, isUser) => {
  if (welcomeScreen) {
    welcomeScreen.style.display = 'none';
  }
  const messageElement = createChatMessageElement(message, isUser);
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
};

const clearChat = () => {
  chatMessages.innerHTML = '';
  if (welcomeScreen) {
    welcomeScreen.style.display = 'flex';
  }
};

newChatButton.addEventListener('click', clearChat);

// Fixed the toggleSidebar function
const toggleSidebar = () => {
  if (sidebar.classList.contains('w-64')) {
    // Close sidebar
    sidebar.classList.remove('w-64', 'p-2');
    sidebar.classList.add('w-0', 'p-0', 'overflow-hidden');
    openSidebarButton.classList.remove('hidden');
  } else {
    // Open sidebar
    sidebar.classList.remove('w-0', 'p-0', 'overflow-hidden');
    sidebar.classList.add('w-64', 'p-2');
    openSidebarButton.classList.add('hidden');
  }
};

// Added window resize listener to auto-close sidebar when width < 700px
window.addEventListener('resize', () => {
  if (window.innerWidth < 700 && sidebar.classList.contains('w-64')) {
    toggleSidebar();
  }
});

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = chatInput.value.trim();

  if (message) {
    // Add user's message
    addMessageToChat(message, true);
    chatInput.value = '';

    // Simulate a bot reply after a short delay
    setTimeout(() => {
      const botReply = `This is a mock reply to: "${message}"`;
      addMessageToChat(botReply, false);
    }, 1000);
  }
});

// Auto-resize textarea
chatInput.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    chatForm.dispatchEvent(new Event('submit'));
  }
});

openSidebarButton.addEventListener('click', toggleSidebar);
closeSidebarButton.addEventListener('click', toggleSidebar);