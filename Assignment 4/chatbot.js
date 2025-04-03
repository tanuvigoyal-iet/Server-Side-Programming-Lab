function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    let botReply = getBotResponse(userInput);
    setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);

    document.getElementById("userInput").value = "";
}

function getBotResponse(input) {
    input = input.toLowerCase();
    
    if (input.includes("hello")) return "Hi there! How can I help you?";
    if (input.includes("weather")) return "You can check the weather by clicking the 'Get Weather' button!";
    if (input.includes("your name")) return "I'm your friendly chatbot!";
    if (input.includes("bye")) return "Goodbye! Have a great day!";
    
    return "I'm not sure about that. Can you ask something else?";
}
