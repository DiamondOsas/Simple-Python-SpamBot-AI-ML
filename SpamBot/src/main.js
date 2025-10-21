const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const welcomeScreen = document.getElementById('welcome-screen');
const newChatButton = document.getElementById('new-chat-button');
const sidebar = document.getElementById('sidebar');
const openSidebarButton = document.getElementById('open-sidebar-button');
const closeSidebarButton = document.getElementById('close-sidebar-button');
const themeToggle = document.getElementById('theme-toggle');
const chatMessageTemplate = document.getElementById('chat-message-template');

const createChatMessageElement = (message, isUser) => {
  const messageElement = chatMessageTemplate.content.cloneNode(true);
  const messageWrapper = messageElement.querySelector('.chat-message');
  const avatar = messageElement.querySelector('.avatar');
  const messageParagraph = messageElement.querySelector('p');

  if (isUser) {
    messageWrapper.classList.add('user');
  }

  avatar.textContent = isUser ? 'U' : 'S';
  avatar.classList.add(isUser ? 'bg-indigo-600' : 'bg-emerald-600');
  messageParagraph.textContent = message;

  return messageElement;
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

const toggleSidebar = () => {
  sidebar.classList.toggle('hidden');
  sidebar.classList.toggle('w-0');
  sidebar.classList.toggle('md:w-64');
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

// Dark mode toggle functionality
const setDarkMode = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

themeToggle.addEventListener('click', () => {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  setDarkMode(!isCurrentlyDark);
});