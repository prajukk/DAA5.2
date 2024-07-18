function toggleMenu() {
    var navbar = document.getElementById("myLinks");
    navbar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("learnMoreBtn").addEventListener("click", function() {
        var features = document.querySelectorAll(".feature");
        features.forEach(function(feature) {
            feature.style.transform = "translateX(-100%)";
            feature.style.transition = "transform 0.5s ease";
        });

        setTimeout(function() {
            window.location.href = "contact.html";
        }, 500);
    });
});

let postsData = [];
const postsContainer = document.querySelector(".posts-container");
const searchDisplay = document.querySelector(".search-display");

fetch("data/posts.json") // Replace with the actual path to your JSON file
    .then(response => response.json())
    .then(data => {
        postsData = data;
        postsData.map(post => createPost(post));
    });

const createPost = (postData) => {
        const {
            title,
            link,
            image,
            categories
        } = postData;
        const post = document.createElement("div");
        post.className = "post";
        post.innerHTML = `
        <a class="post-preview" href="${link}" target="_blank">
            <img class="post-image" src="${image}" alt="${title}">
        </a>
        <div class="post-content">
            <p class="post-title">${title}</p>
            <div class="post-tags">
                ${categories.map(category => `<span class="post-tag">${category}</span>`).join('')}
            </div>
        </div>
    `;
    postsContainer.append(post);
};

const handleSearchPosts = (query) => {
    const searchQuery = query.trim().toLowerCase();

    if (searchQuery.length <= 1) {
        resetPosts();
        return;
    }

    let searchResults = postsData.filter(post =>
        post.categories.some(category => category.toLowerCase().includes(searchQuery)) ||
        post.title.toLowerCase().includes(searchQuery)
    );

    searchDisplay.textContent = searchResults.length === 0 ? "No results found" :
        `${searchResults.length} result${searchResults.length > 1 ? 's' : ''} found for your query: ${query}`;

    postsContainer.innerHTML = "";
    searchResults.map(post => createPost(post));
};

const resetPosts = () => {
    searchDisplay.textContent = "";
    postsContainer.innerHTML = "";
    postsData.map(post => createPost(post));
};

const search = document.getElementById("search");

let debounceTimer;
const debounce = (callback, time) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(callback, time);
};

search.addEventListener("input", event => {
    const query = event.target.value;
    debounce(() => handleSearchPosts(query), 500);
});




//slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Optional: if you want to control the marquee with JavaScript instead of CSS
document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector('.marquee');
    let marqueeContent = marquee.innerHTML;
    marquee.innerHTML = marqueeContent + marqueeContent; // Duplicate content for seamless looping
})
//slider

// JavaScript for slideshow functionality
// chart
let chatOpen = false; // Track if chat is open or closed

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatButton = document.querySelector('.chat');

    if (!chatOpen) {
        // Open the chat
        chatContainer.style.display = 'flex';
        setTimeout(() => {
            chatContainer.style.transform = 'translateX(0)';
        }, 0);
        chatButton.style.display = 'none'; // hide the button when chat is open
        chatOpen = true;
    } else {
        // Close the chat
        chatContainer.style.transform = 'translateX(100%)';
        setTimeout(() => {
            chatContainer.style.display = 'none';
        }, 300);
        chatButton.style.display = 'block'; // show the button when chat is closed
        chatOpen = false;
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message === '') return;

    appendMessage(message, 'user');

    setTimeout(() => {
        const aiResponse = getAIResponse(message);
        appendMessage(aiResponse, 'bot');
    }, 1000);

    userInput.value = '';
    userInput.focus();
}

function appendMessage(message, sender) {
    const chatBody = document.getElementById('chat-body');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getAIResponse(message) {
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "hi": "Hello! What can I do for you?",
        "help": "Sure, I'm here to help. What do you need assistance with?",
    };

    const lowerCaseMessage = message.toLowerCase();
    return responses[lowerCaseMessage] || "I'm sorry, I didn't understand that. Can you please rephrase?";
}

document.addEventListener('click', function(e) {
    const chatContainer = document.getElementById('chat-container');
    const chatButton = document.querySelector('.chat');
    if (chatOpen && !chatContainer.contains(e.target) && !chatButton.contains(e.target)) {
        toggleChat();
    }
});

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
const video = document.getElementById('myVideo');

function toggleVideoSound() {
    if (window.scrollY > 1) {
        video.muted = true;
    } else {
        video.muted = false;
    }
}

window.addEventListener('scroll', toggleVideoSound);

// Call the function initially to set the video sound based on the initial scroll position
toggleVideoSound();