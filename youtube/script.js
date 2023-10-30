document.addEventListener("DOMContentLoaded", function () {
    const videoList = document.querySelector(".video-list");

    fetch("videos.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((video) => {
                const videoElement = document.createElement("video");
                videoElement.setAttribute("controls", true);
                videoElement.innerHTML = `<source src="${video.url}" type="video/mp4">`;
                const titleElement = document.createElement("h2");
                titleElement.textContent = video.title;
                videoList.appendChild(titleElement);
                videoList.appendChild(videoElement);
            });
        });
});
