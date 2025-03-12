// const showVideo = () =>{
//     const show = document.querySelector(".show-video");
//     // show.style.backgroundColor ="black";
// }

document.querySelector('.click-to-video').addEventListener('click', function () {
    const videoContainer = document.querySelector('.show-video');
    videoContainer.classList.remove('hidden');
    
    const iframe = document.getElementById('video-frame');
    iframe.src += "?autoplay=1";
});

// function copyText(element) {
//     const text = element.parentElement.querySelector('.copy-text').textContent;
//     navigator.clipboard.writeText(text).then(() => {
//         alert('Copied: ' + text);
//     }).catch(err => console.error('Error copying text: ', err));
// }

