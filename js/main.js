// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Chatbot Functionality
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

chatbotBtn.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    chatbotInput.value = '';

    // Bot response
    setTimeout(() => {
        let botResponse = '';

        if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
            botResponse = 'Hello! How can I assist you with Pérenne wines today?';
        } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
            botResponse = 'Our wines range from $35 to $85 per bottle. Would you like information about our membership options for additional savings?';
        } else if (message.toLowerCase().includes('ship') || message.toLowerCase().includes('deliver')) {
            botResponse = 'We ship to most states across the US. Delivery typically takes 3-5 business days. Shipping costs vary based on location.';
        } else if (message.toLowerCase().includes('member') || message.toLowerCase().includes('club')) {
            botResponse = 'We offer two membership levels: Club Pérenne ($150/shipment) and Collector\'s Circle ($300/shipment). Each offers exclusive benefits and savings.';
        } else if (message.toLowerCase().includes('winery') || message.toLowerCase().includes('visit')) {
            botResponse = 'Our winery is located at 123 Vineyard Lane, Healdsburg, CA. We\'re open for tastings Thursday-Monday from 10am to 5pm. Reservations are recommended.';
        } else {
            botResponse = 'Thank you for your message. Our team will get back to you shortly. Is there anything specific you\'d like to know about our wines?';
        }

        addMessage(botResponse, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
