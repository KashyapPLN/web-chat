let activeChat = null;
        let chats = {
            'Group1': [{ text: 'Hey there!', sent: false }, { text: 'How are you?', sent: true }],
            'Group2': [{ text: 'Hello!', sent: false }, { text: 'Let’s catch up.', sent: true }],
            'Group3': [{ text: 'What’s up?', sent: false }, { text: 'All good, you?', sent: true }]
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
                div.innerText = msg.text;
                chatBox.appendChild(div);
            });
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function sendMessage() {
            const input = document.getElementById('message-input');
            const messageText = input.value.trim();
            if (messageText === '' || !activeChat) return;

            chats[activeChat].push({ text: messageText, sent: true });
            updateChatBox();
            input.value = '';
        }