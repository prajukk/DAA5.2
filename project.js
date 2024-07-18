let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function updatePage() {
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.style.transform = 'rotateY(0deg)';
            page.style.zIndex = totalPages;
        } else if (index < currentPage) {
            page.style.transform = 'rotateY(-180deg)';
            page.style.zIndex = totalPages - index;
        } else {
            page.style.transform = 'rotateY(180deg)';
            page.style.zIndex = totalPages - index;
        }
    });
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

updatePage();
const video = document.getElementById('myVideo');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function muteVideo() {
    video.muted = !video.muted;
}

function setVolume(value) {
    video.volume = value;
}



function nextPage() {
    if (currentPage < totalPages - 1) {
        pauseVideo(); // Pause the video
        // Mute the video
        currentPage++;
        updatePage();
    }
}