let activeChat = null;
let chats = {
    'Group1': [{ text: 'Hey there!', sent: false, time: '10:30 AM' }, { text: 'How are you?', sent: true, time: '10:32 AM' }],
    'Group2': [{ text: 'Hello!', sent: false, time: '9:15 AM' }, { text: 'Let’s catch up.', sent: true, time: '9:20 AM' }],
    'Group3': [{ text: 'What’s up?', sent: false, time: '8:45 AM' }, { text: 'All good, you?', sent: true, time: '8:50 AM' }]
};

function openChat(user, chatElement) {
    document.querySelectorAll('.chat').forEach(chat => chat.classList.remove('active'));
    chatElement.classList.add('active');

    activeChat = user;
    document.getElementById('chat-area').style.display = 'block';
    document.getElementById('chat-header').innerText = user;
    updateChatBox();
}

function updateChatBox() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';
    chats[activeChat].forEach(msg => {
        let div = document.createElement('div');
        div.className = 'message ' + (msg.sent ? 'sent' : 'received');
        div.innerHTML = `${msg.text} <span class="timestamp">${msg.time}</span>`;
        chatBox.appendChild(div);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();
    if (messageText === '' || !activeChat) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    chats[activeChat].push({ text: messageText, sent: true, time });
    updateChatBox();
    input.value = '';
}
