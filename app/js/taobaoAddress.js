// // function copyToClipboard(elementId) {
// //     const text = document.getElementById(elementId).textContent.trim();
// //     navigator.clipboard.writeText(text).then(() => showCopyMessage());
// // }
// function copyFullAddress() {
//     // alert(1)
//     const address = document.getElementById('address').textContent.trim();
//     const recipient = document.getElementById('recipient').textContent.trim();
//     const phone = document.getElementById('phone').textContent.trim();
//     const fullAddress = `${address}\n${recipient}\n${phone}`;
//     navigator.clipboard.writeText(fullAddress).then(() => showCopyMessage());
// }
// function showCopyMessage() {
//     const message = document.getElementById("copy-message");
//     message.classList.remove("hidden");
//     setTimeout(() => message.classList.add("hidden"), 2000);
// }
// function toggleVideo() {
//     document.getElementById("video-container").classList.toggle("hidden");
// }

function copyToClipboard(element) {
    const text = element.parentElement.querySelector(".copy-text").getAttribute("data-text");
    navigator.clipboard.writeText(text).then(() => {
        showCopyMessage(text);
    }).catch(err => console.error("Failed to copy text:", err));
}

function copyFullAddress() {
    let fullAddress = "唛头427LJH陆运南庄紫洞北路116号东岗工业区欧驰企业二仓路口, 收货人: 427LJH, 电话: +86 18029266251";
    navigator.clipboard.writeText(fullAddress).then(() => {
        showCopyMessage(fullAddress);
    }).catch(err => console.error("Failed to copy full address:", err));
}

function showCopyMessage(text) {
    document.getElementById("copied-text").textContent = text;
    const copyMessage = document.getElementById("copy-message");
    copyMessage.classList.remove("hidden");
    setTimeout(() => {
        copyMessage.classList.add("hidden");
    }, 3000);
}