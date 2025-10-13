import './style.css'

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

const createChatMessageElement = (message, isUser) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('flex', 'items-start', 'gap-3');
  if (isUser) {
    messageElement.classList.add('justify-end');
  }

  const avatar = document.createElement('div');
  avatar.classList.add('w-8', 'h-8', 'rounded-full', 'flex', 'items-center', 'justify-center', 'font-bold', 'text-sm');
  avatar.textContent = isUser ? 'U' : 'G';
  avatar.classList.add(isUser ? 'bg-gray-600' : 'bg-blue-600');

  const messageContent = document.createElement('div');
  messageContent.classList.add('rounded-lg', 'p-3', 'max-w-lg');
  messageContent.classList.add(isUser ? 'bg-blue-600' : 'bg-gray-700');

  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = message;
  messageContent.appendChild(messageParagraph);

  if (isUser) {
    messageElement.appendChild(messageContent);
    messageElement.appendChild(avatar);
  } else {
    messageElement.appendChild(avatar);
    messageElement.appendChild(messageContent);
  }

  return messageElement;
};

const addMessageToChat = (message, isUser) => {
  const messageElement = createChatMessageElement(message, isUser);
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
};

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
