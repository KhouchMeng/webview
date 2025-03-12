// function copyToClipboard(element) {
//     const text = element.parentElement.querySelector(".copy-text").textContent.trim();
//     navigator.clipboard.writeText(text).then(() => {
//         showCopyMessage();
//     }).catch(err => console.error("Copy failed", err));
// }

// function copyFullAddress() {
//     // alert(1)
//     let fullAddress = "";
//     document.querySelectorAll(".copy-text").forEach(el => {
//         fullAddress += el.textContent.trim() + "\n";
//     });
//     navigator.clipboard.writeText(fullAddress.trim()).then(() => {
//         showCopyMessage();
//     }).catch(err => console.error("Copy failed", err));
// }

// function showCopyMessage() {
//     const message = document.getElementById("copy-message");
//     message.classList.remove("hidden");
//     setTimeout(() => message.classList.add("hidden"), 2000);
// }


//

function copyToClipboard(element) {
    const text = element.parentElement.querySelector(".copy-text div").innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        showCopyMessage(text);
    }).catch(err => console.error("Failed to copy text:", err));
}

function copyFullAddress() {
    let fullAddressElements = document.querySelectorAll(".copy-text div");
    let fullAddressText = Array.from(fullAddressElements).map(div => div.innerText.trim()).join(", ");
    navigator.clipboard.writeText(fullAddressText).then(() => {
        showCopyMessage(fullAddressText);
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